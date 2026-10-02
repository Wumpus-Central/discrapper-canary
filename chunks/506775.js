n.d(e, { M$: () => u, M0: () => E, ZP: () => d, aP: () => m, hD: () => f });
var i,
    r = n(975571),
    s = n(379257),
    a = n(306537),
    l = n(36149),
    o = n(652215),
    c = n(375708),
    u = (((i = {}).ADULT = "adult"), (i.TEEN = "teen"), (i.UNVERIFIED = "unverified"), i);
function d() {
    let t = (0, l.b8)();
    return (0, l.yM)() ? "teen" : t ? "adult" : "unverified";
}
function E() {
    s.A.openUrl(r.A.getArticleURL(o.MVz.TIGGER_PAWTECT_LEARN_MORE));
}
function m() {
    s.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.ACCOUNT_AGE_GROUP });
}
function f() {
    switch (d()) {
        case "adult":
            return c.intl.string(c.t.XxRj7f);
        case "teen":
            return c.intl.string(c.t.sK0dmH);
        case "unverified":
            return c.intl.string(c.t.lKDPGA);
    }
}
