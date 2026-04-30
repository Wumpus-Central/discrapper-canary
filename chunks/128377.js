"use strict";
n.d(t, { H: () => _ });
var i = n(680753),
    r = n(875565),
    s = n(272469),
    a = n(231577),
    o = n(834932),
    l = n(83220),
    u = n(487851),
    c = n(286788);
class d {
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
            (this._propagationContext = { traceId: (0, o.el)(), spanId: (0, o.ZF)() });
    }
    clone() {
        let e = new d();
        return (
            (e._breadcrumbs = [...this._breadcrumbs]),
            (e._tags = { ...this._tags }),
            (e._extra = { ...this._extra }),
            (e._contexts = { ...this._contexts }),
            this._contexts.flags && (e._contexts.flags = { values: [...this._contexts.flags.values] }),
            (e._user = this._user),
            (e._level = this._level),
            (e._session = this._session),
            (e._transactionName = this._transactionName),
            (e._fingerprint = this._fingerprint),
            (e._eventProcessors = [...this._eventProcessors]),
            (e._requestSession = this._requestSession),
            (e._attachments = [...this._attachments]),
            (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (e._propagationContext = { ...this._propagationContext }),
            (e._client = this._client),
            (e._lastEventId = this._lastEventId),
            (0, c.r)(e, (0, c.f)(this)),
            e
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
        return this._eventProcessors.push(e), this;
    }
    setUser(e) {
        return (
            (this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }),
            this._session && (0, i.qO)(this._session, { user: e }),
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
        return (this._requestSession = e), this;
    }
    setTags(e) {
        return (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this;
    }
    setTag(e, t) {
        return (this._tags = { ...this._tags, [e]: t }), this._notifyScopeListeners(), this;
    }
    setExtras(e) {
        return (this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this;
    }
    setExtra(e, t) {
        return (this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this;
    }
    setFingerprint(e) {
        return (this._fingerprint = e), this._notifyScopeListeners(), this;
    }
    setLevel(e) {
        return (this._level = e), this._notifyScopeListeners(), this;
    }
    setTransactionName(e) {
        return (this._transactionName = e), this._notifyScopeListeners(), this;
    }
    setContext(e, t) {
        return null === t ? delete this._contexts[e] : (this._contexts[e] = t), this._notifyScopeListeners(), this;
    }
    setSession(e) {
        return e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
        return this._session;
    }
    update(e) {
        if (!e) return this;
        let t = "function" == typeof e ? e(this) : e,
            [n, i] =
                t instanceof _ ? [t.getScopeData(), t.getRequestSession()] : (0, r.Qd)(t) ? [e, e.requestSession] : [],
            { tags: s, extra: a, user: o, contexts: l, level: u, fingerprint: c = [], propagationContext: d } = n || {};
        return (
            (this._tags = { ...this._tags, ...s }),
            (this._extra = { ...this._extra, ...a }),
            (this._contexts = { ...this._contexts, ...l }),
            o && Object.keys(o).length && (this._user = o),
            u && (this._level = u),
            c.length && (this._fingerprint = c),
            d && (this._propagationContext = d),
            i && (this._requestSession = i),
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
            (0, c.r)(this, void 0),
            (this._attachments = []),
            this.setPropagationContext({ traceId: (0, o.el)() }),
            this._notifyScopeListeners(),
            this
        );
    }
    addBreadcrumb(e, t) {
        let n = "number" == typeof t ? t : 100;
        if (n <= 0) return this;
        let i = { timestamp: (0, l.lu)(), ...e };
        return (
            this._breadcrumbs.push(i),
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
        return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
    }
    addAttachment(e) {
        return this._attachments.push(e), this;
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
            span: (0, c.f)(this),
        };
    }
    setSDKProcessingMetadata(e) {
        return (this._sdkProcessingMetadata = (0, u.h)(this._sdkProcessingMetadata, e, 2)), this;
    }
    setPropagationContext(e) {
        return (this._propagationContext = { spanId: (0, o.ZF)(), ...e }), this;
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    captureException(e, t) {
        let n = t && t.event_id ? t.event_id : (0, a.eJ)();
        if (!this._client) return s.vF.warn("No client configured on scope - will not capture exception!"), n;
        let i = Error("Sentry syntheticException");
        return (
            this._client.captureException(e, { originalException: e, syntheticException: i, ...t, event_id: n }, this),
            n
        );
    }
    captureMessage(e, t, n) {
        let i = n && n.event_id ? n.event_id : (0, a.eJ)();
        if (!this._client) return s.vF.warn("No client configured on scope - will not capture message!"), i;
        let r = Error(e);
        return (
            this._client.captureMessage(e, t, { originalException: e, syntheticException: r, ...n, event_id: i }, this),
            i
        );
    }
    captureEvent(e, t) {
        let n = t && t.event_id ? t.event_id : (0, a.eJ)();
        return (
            this._client
                ? this._client.captureEvent(e, { ...t, event_id: n }, this)
                : s.vF.warn("No client configured on scope - will not capture event!"),
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
}
let _ = d;
