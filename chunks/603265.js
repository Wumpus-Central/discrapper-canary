n.d(t, { A: () => o });
var i = n(636401),
    r = n(440454),
    a = n(313731),
    l = n(613057),
    s = n(652215);
class o extends a.A {
    origin;
    frameId;
    postMessageToRPCClient;
    logger;
    postClose;
    onSendingToRPCClient;
    closed;
    constructor({
        origin: e,
        postMessageToRPCClient: t,
        frameId: n,
        version: r,
        encoding: a,
        logger: o,
        postClose: d,
        onSendingToRPCClient: u,
    }) {
        if ((super(l.z4.POST_MESSAGE, r, a), -1 === ["etf", "json"].indexOf(a)))
            throw new i.A({ closeCode: s.YI$.INVALID_ENCODING }, `Invalid Encoding: ${a}`);
        if ("etf" === a) throw new i.A({ closeCode: s.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        (this.origin = e),
            (this.postMessageToRPCClient = t),
            (this.frameId = n),
            (this.logger = o),
            (this.postClose = d),
            (this.onSendingToRPCClient = u),
            (this.closed = !1);
    }
    send(e) {
        this.onSendingToRPCClient?.(e, this.id), this.postMessageToRPCClient([r.A.FRAME, e], this.origin);
    }
    close(e, t) {
        this.closed || this.postClose(this.origin, { code: e, message: t }, this.postMessageToRPCClient),
            (this.closed = !0);
    }
}
