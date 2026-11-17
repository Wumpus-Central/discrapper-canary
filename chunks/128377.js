var r = n(680753),
    i = n(875565),
    o = n(272469),
    a = n(231577),
    s = n(834932),
    l = n(83220),
    c = n(487851),
    u = n(286788);
let d = class e {
    constructor() {
        ((this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = { traceId: (0, s.el)(), spanId: (0, s.ZF)() }));
    }
    clone() {
        let t = new e();
        return (
            (t._breadcrumbs = [...this._breadcrumbs]),
            (t._tags = { ...this._tags }),
            (t._extra = { ...this._extra }),
            (t._contexts = { ...this._contexts }),
            this._contexts.flags && (t._contexts.flags = { values: [...this._contexts.flags.values] }),
            (t._user = this._user),
            (t._level = this._level),
            (t._session = this._session),
            (t._transactionName = this._transactionName),
            (t._fingerprint = this._fingerprint),
            (t._eventProcessors = [...this._eventProcessors]),
            (t._requestSession = this._requestSession),
            (t._attachments = [...this._attachments]),
            (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (t._propagationContext = { ...this._propagationContext }),
            (t._client = this._client),
            (t._lastEventId = this._lastEventId),
            (0, u.r)(t, (0, u.f)(this)),
            t
        );
    }
    setClient(e) {
        this._client = e;
    }
    setLastEventId(e) {
        this._lastEventId = e;
    }
    getClient() {
        return this._client;
    }
    lastEventId() {
        return this._lastEventId;
    }
    addScopeListener(e) {
        this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
        return (this._eventProcessors.push(e), this);
    }
    setUser(e) {
        return (
            (this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }),
            this._session && (0, r.qO)(this._session, { user: e }),
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
    setRequestSession(e) {
        return ((this._requestSession = e), this);
    }
    setTags(e) {
        return ((this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this);
    }
    setTag(e, t) {
        return ((this._tags = { ...this._tags, [e]: t }), this._notifyScopeListeners(), this);
    }
    setExtras(e) {
        return ((this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this);
    }
    setExtra(e, t) {
        return ((this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this);
    }
    setFingerprint(e) {
        return ((this._fingerprint = e), this._notifyScopeListeners(), this);
    }
    setLevel(e) {
        return ((this._level = e), this._notifyScopeListeners(), this);
    }
    setTransactionName(e) {
        return ((this._transactionName = e), this._notifyScopeListeners(), this);
    }
    setContext(e, t) {
        return (null === t ? delete this._contexts[e] : (this._contexts[e] = t), this._notifyScopeListeners(), this);
    }
    setSession(e) {
        return (e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this);
    }
    getSession() {
        return this._session;
    }
    update(e) {
        if (!e) return this;
        let t = "function" == typeof e ? e(this) : e,
            [n, r] =
                t instanceof d ? [t.getScopeData(), t.getRequestSession()] : (0, i.Qd)(t) ? [e, e.requestSession] : [],
            { tags: o, extra: a, user: s, contexts: l, level: c, fingerprint: u = [], propagationContext: p } = n || {};
        return (
            (this._tags = { ...this._tags, ...o }),
            (this._extra = { ...this._extra, ...a }),
            (this._contexts = { ...this._contexts, ...l }),
            s && Object.keys(s).length && (this._user = s),
            c && (this._level = c),
            u.length && (this._fingerprint = u),
            p && (this._propagationContext = p),
            r && (this._requestSession = r),
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
            this.setPropagationContext({ traceId: (0, s.el)() }),
            this._notifyScopeListeners(),
            this
        );
    }
    addBreadcrumb(e, t) {
        let n = "number" == typeof t ? t : 100;
        if (n <= 0) return this;
        let r = { timestamp: (0, l.lu)(), ...e };
        return (
            this._breadcrumbs.push(r),
            this._breadcrumbs.length > n &&
                ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
                this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")),
            this._notifyScopeListeners(),
            this
        );
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
        return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
    }
    addAttachment(e) {
        return (this._attachments.push(e), this);
    }
    clearAttachments() {
        return ((this._attachments = []), this);
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
    setSDKProcessingMetadata(e) {
        return ((this._sdkProcessingMetadata = (0, c.h)(this._sdkProcessingMetadata, e, 2)), this);
    }
    setPropagationContext(e) {
        return ((this._propagationContext = { spanId: (0, s.ZF)(), ...e }), this);
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    captureException(e, t) {
        let n = t && t.event_id ? t.event_id : (0, a.eJ)();
        if (!this._client) return (o.vF.warn("No client configured on scope - will not capture exception!"), n);
        let r = Error("Sentry syntheticException");
        return (
            this._client.captureException(e, { originalException: e, syntheticException: r, ...t, event_id: n }, this),
            n
        );
    }
    captureMessage(e, t, n) {
        let r = n && n.event_id ? n.event_id : (0, a.eJ)();
        if (!this._client) return (o.vF.warn("No client configured on scope - will not capture message!"), r);
        let i = Error(e);
        return (
            this._client.captureMessage(e, t, { originalException: e, syntheticException: i, ...n, event_id: r }, this),
            r
        );
    }
    captureEvent(e, t) {
        let n = t && t.event_id ? t.event_id : (0, a.eJ)();
        return (
            this._client
                ? this._client.captureEvent(e, { ...t, event_id: n }, this)
                : o.vF.warn("No client configured on scope - will not capture event!"),
            n
        );
    }
    _notifyScopeListeners() {
        this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((e) => {
                e(this);
            }),
            (this._notifyingListeners = !1));
    }
};
n.d(t, {}, { H: d });
