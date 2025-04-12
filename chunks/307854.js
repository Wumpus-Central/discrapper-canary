s.d(e, { s: () => _ });
var i = s(731889),
    n = s(573736),
    r = s(101284),
    o = s(394798),
    a = s(622916),
    c = s(112797),
    h = s(99342);
class u {
    constructor() {
        (this._notifyingListeners = !1), (this._scopeListeners = []), (this._eventProcessors = []), (this._breadcrumbs = []), (this._attachments = []), (this._user = {}), (this._tags = {}), (this._extra = {}), (this._contexts = {}), (this._sdkProcessingMetadata = {}), (this._propagationContext = (0, i.Q)());
    }
    clone() {
        let t = new u();
        return (t._breadcrumbs = [...this._breadcrumbs]), (t._tags = { ...this._tags }), (t._extra = { ...this._extra }), (t._contexts = { ...this._contexts }), (t._user = this._user), (t._level = this._level), (t._session = this._session), (t._transactionName = this._transactionName), (t._fingerprint = this._fingerprint), (t._eventProcessors = [...this._eventProcessors]), (t._requestSession = this._requestSession), (t._attachments = [...this._attachments]), (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }), (t._propagationContext = { ...this._propagationContext }), (t._client = this._client), (t._lastEventId = this._lastEventId), (0, h.D)(t, (0, h.Y)(this)), t;
    }
    setClient(t) {
        this._client = t;
    }
    setLastEventId(t) {
        this._lastEventId = t;
    }
    getClient() {
        return this._client;
    }
    lastEventId() {
        return this._lastEventId;
    }
    addScopeListener(t) {
        this._scopeListeners.push(t);
    }
    addEventProcessor(t) {
        return this._eventProcessors.push(t), this;
    }
    setUser(t) {
        return (
            (this._user = t || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0
            }),
            this._session && (0, c.CT)(this._session, { user: t }),
            this._notifyScopeListeners(),
            this
        );
    }
    getUser() {
        return this._user;
    }
    getRequestSession() {
        return this._requestSession;
    }
    setRequestSession(t) {
        return (this._requestSession = t), this;
    }
    setTags(t) {
        return (
            (this._tags = {
                ...this._tags,
                ...t
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setTag(t, e) {
        return (
            (this._tags = {
                ...this._tags,
                [t]: e
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setExtras(t) {
        return (
            (this._extra = {
                ...this._extra,
                ...t
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setExtra(t, e) {
        return (
            (this._extra = {
                ...this._extra,
                [t]: e
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setFingerprint(t) {
        return (this._fingerprint = t), this._notifyScopeListeners(), this;
    }
    setLevel(t) {
        return (this._level = t), this._notifyScopeListeners(), this;
    }
    setTransactionName(t) {
        return (this._transactionName = t), this._notifyScopeListeners(), this;
    }
    setContext(t, e) {
        return null === e ? delete this._contexts[t] : (this._contexts[t] = e), this._notifyScopeListeners(), this;
    }
    setSession(t) {
        return t ? (this._session = t) : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
        return this._session;
    }
    update(t) {
        if (!t) return this;
        let e = 'function' == typeof t ? t(this) : t,
            [s, i] = e instanceof _ ? [e.getScopeData(), e.getRequestSession()] : (0, n.PO)(e) ? [t, t.requestSession] : [],
            { tags: r, extra: o, user: a, contexts: c, level: h, fingerprint: u = [], propagationContext: p } = s || {};
        return (
            (this._tags = {
                ...this._tags,
                ...r
            }),
            (this._extra = {
                ...this._extra,
                ...o
            }),
            (this._contexts = {
                ...this._contexts,
                ...c
            }),
            a && Object.keys(a).length && (this._user = a),
            h && (this._level = h),
            u.length && (this._fingerprint = u),
            p && (this._propagationContext = p),
            i && (this._requestSession = i),
            this
        );
    }
    clear() {
        return (this._breadcrumbs = []), (this._tags = {}), (this._extra = {}), (this._user = {}), (this._contexts = {}), (this._level = void 0), (this._transactionName = void 0), (this._fingerprint = void 0), (this._requestSession = void 0), (this._session = void 0), (0, h.D)(this, void 0), (this._attachments = []), (this._propagationContext = (0, i.Q)()), this._notifyScopeListeners(), this;
    }
    addBreadcrumb(t, e) {
        let s = 'number' == typeof e ? e : 100;
        if (s <= 0) return this;
        let i = {
                timestamp: (0, r.yW)(),
                ...t
            },
            n = this._breadcrumbs;
        return n.push(i), (this._breadcrumbs = n.length > s ? n.slice(-s) : n), this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
        return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
    }
    addAttachment(t) {
        return this._attachments.push(t), this;
    }
    clearAttachments() {
        return (this._attachments = []), this;
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: (0, h.Y)(this)
        };
    }
    setSDKProcessingMetadata(t) {
        return (
            (this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }),
            this
        );
    }
    setPropagationContext(t) {
        return (this._propagationContext = t), this;
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    captureException(t, e) {
        let s = e && e.event_id ? e.event_id : (0, o.DM)();
        if (!this._client) return a.kg.warn('No client configured on scope - will not capture exception!'), s;
        let i = Error('Sentry syntheticException');
        return (
            this._client.captureException(
                t,
                {
                    originalException: t,
                    syntheticException: i,
                    ...e,
                    event_id: s
                },
                this
            ),
            s
        );
    }
    captureMessage(t, e, s) {
        let i = s && s.event_id ? s.event_id : (0, o.DM)();
        if (!this._client) return a.kg.warn('No client configured on scope - will not capture message!'), i;
        let n = Error(t);
        return (
            this._client.captureMessage(
                t,
                e,
                {
                    originalException: t,
                    syntheticException: n,
                    ...s,
                    event_id: i
                },
                this
            ),
            i
        );
    }
    captureEvent(t, e) {
        let s = e && e.event_id ? e.event_id : (0, o.DM)();
        return (
            this._client
                ? this._client.captureEvent(
                      t,
                      {
                          ...e,
                          event_id: s
                      },
                      this
                  )
                : a.kg.warn('No client configured on scope - will not capture event!'),
            s
        );
    }
    _notifyScopeListeners() {
        this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((t) => {
                t(this);
            }),
            (this._notifyingListeners = !1));
    }
}
let _ = u;
