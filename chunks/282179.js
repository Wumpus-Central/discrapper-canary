r.d(e, {
    H: () => l,
});
var n = r(159744),
    s = r(587993),
    i = r(745768),
    o = r(27133),
    a = r(478681),
    c = r(986787),
    u = r(378006);
class h {
    constructor() {
        (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = (0, n.J)());
    }
    clone() {
        let t = new h();
        return (
            (t._breadcrumbs = [...this._breadcrumbs]),
            (t._tags = {
                ...this._tags,
            }),
            (t._extra = {
                ...this._extra,
            }),
            (t._contexts = {
                ...this._contexts,
            }),
            (t._user = this._user),
            (t._level = this._level),
            (t._session = this._session),
            (t._transactionName = this._transactionName),
            (t._fingerprint = this._fingerprint),
            (t._eventProcessors = [...this._eventProcessors]),
            (t._requestSession = this._requestSession),
            (t._attachments = [...this._attachments]),
            (t._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
            }),
            (t._propagationContext = {
                ...this._propagationContext,
            }),
            (t._client = this._client),
            (t._lastEventId = this._lastEventId),
            (0, u.r)(t, (0, u.f)(this)),
            t
        );
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
                username: void 0,
            }),
            this._session &&
                (0, c.qO)(this._session, {
                    user: t,
                }),
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
                ...t,
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setTag(t, e) {
        return (
            (this._tags = {
                ...this._tags,
                [t]: e,
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setExtras(t) {
        return (
            (this._extra = {
                ...this._extra,
                ...t,
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setExtra(t, e) {
        return (
            (this._extra = {
                ...this._extra,
                [t]: e,
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
        let e = "function" == typeof t ? t(this) : t,
            [r, n] =
                e instanceof l ? [e.getScopeData(), e.getRequestSession()] : (0, s.Qd)(e) ? [t, t.requestSession] : [],
            { tags: i, extra: o, user: a, contexts: c, level: u, fingerprint: h = [], propagationContext: d } = r || {};
        return (
            (this._tags = {
                ...this._tags,
                ...i,
            }),
            (this._extra = {
                ...this._extra,
                ...o,
            }),
            (this._contexts = {
                ...this._contexts,
                ...c,
            }),
            a && Object.keys(a).length && (this._user = a),
            u && (this._level = u),
            h.length && (this._fingerprint = h),
            d && (this._propagationContext = d),
            n && (this._requestSession = n),
            this
        );
    }
    clear() {
        return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._session = void 0),
            (0, u.r)(this, void 0),
            (this._attachments = []),
            (this._propagationContext = (0, n.J)()),
            this._notifyScopeListeners(),
            this
        );
    }
    addBreadcrumb(t, e) {
        let r = "number" == typeof e ? e : 100;
        if (r <= 0) return this;
        let n = {
                timestamp: (0, i.lu)(),
                ...t,
            },
            s = this._breadcrumbs;
        return s.push(n), (this._breadcrumbs = s.length > r ? s.slice(-r) : s), this._notifyScopeListeners(), this;
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
            span: (0, u.f)(this),
        };
    }
    setSDKProcessingMetadata(t) {
        return (
            (this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t,
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
        let r = e && e.event_id ? e.event_id : (0, o.eJ)();
        if (!this._client) return a.vF.warn("No client configured on scope - will not capture exception!"), r;
        let n = Error("Sentry syntheticException");
        return (
            this._client.captureException(
                t,
                {
                    originalException: t,
                    syntheticException: n,
                    ...e,
                    event_id: r,
                },
                this,
            ),
            r
        );
    }
    captureMessage(t, e, r) {
        let n = r && r.event_id ? r.event_id : (0, o.eJ)();
        if (!this._client) return a.vF.warn("No client configured on scope - will not capture message!"), n;
        let s = Error(t);
        return (
            this._client.captureMessage(
                t,
                e,
                {
                    originalException: t,
                    syntheticException: s,
                    ...r,
                    event_id: n,
                },
                this,
            ),
            n
        );
    }
    captureEvent(t, e) {
        let r = e && e.event_id ? e.event_id : (0, o.eJ)();
        return (
            this._client
                ? this._client.captureEvent(
                      t,
                      {
                          ...e,
                          event_id: r,
                      },
                      this,
                  )
                : a.vF.warn("No client configured on scope - will not capture event!"),
            r
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
let l = h;
