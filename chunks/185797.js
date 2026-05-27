"use strict";
n.d(t, { F: () => p, L: () => f });
var i,
    r = n(743368),
    s = n(975807),
    a = n(723702),
    o = n(985603),
    l = n(777376),
    u = n(758209),
    c = n(693037),
    d = n(674567),
    _ = n(237146),
    h = n(375708),
    f = (((i = {}).DEFAULT = "default"), (i.SUBSCRIBE = "subscribe"), i);
function p() {
    let e,
        t = (0, d.V)(),
        { status: n, requestInProgress: i, redirect: f } = (0, c.r)(),
        p = (0, u.A)(f),
        E = (0, o.A)();
    if (t === d.s.FREE_FRACTIONAL_NITRO) return { kind: "subscribe", text: h.intl.string(h.t.sEAnVH) };
    let m = (function (e) {
        switch (e) {
            case l.p1.NOT_CLAIMED:
            case l.p1.CLAIM_IN_PROGRESS:
                return { text: h.intl.string(_.default.EL3rU4) };
            case l.p1.CLAIMED:
                return { text: h.intl.string(_.default["0mQ2U6"]), icon: r.W, iconPosition: "end" };
            case l.p1.CANCELLATION_IN_PROGRESS:
                return { text: h.intl.string(_.default.wBz9aO), disabled: !0 };
        }
    })(n);
    if (n === l.p1.NOT_CLAIMED || n === l.p1.CLAIM_IN_PROGRESS)
        e = () => {
            p();
        };
    else if (n === l.p1.CLAIMED) {
        let t = (0, a.isWindows)() ? "msxbox://" : "https://xbox.com/play";
        e = () => {
            (0, s.A)(t), E(o.xf.PARTNER_PAGE_REDIRECT, t);
        };
    }
    return {
        kind: "default",
        claimStatus: n,
        requestInProgress: i,
        text: m.text,
        disabled: (m.disabled ?? !1) || i,
        loading: i,
        icon: m.icon,
        iconPosition: m.iconPosition,
        onClick: e,
    };
}
