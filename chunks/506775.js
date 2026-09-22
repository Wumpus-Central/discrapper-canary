i.d(n, { M$: () => u, M0: () => _, ZP: () => l, aP: () => A, hD: () => f });
var e,
    r = i(975571),
    s = i(379257),
    a = i(306537),
    o = i(36149),
    E = i(652215),
    c = i(375708),
    u = (((e = {}).ADULT = "adult"), (e.TEEN = "teen"), (e.UNVERIFIED = "unverified"), e);
function l() {
    let t = (0, o.b8)();
    return (0, o.yM)() ? "teen" : t ? "adult" : "unverified";
}
function _() {
    s.A.openUrl(r.A.getArticleURL(E.MVz.TIGGER_PAWTECT_LEARN_MORE));
}
function A() {
    s.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.ACCOUNT_AGE_GROUP });
}
function f() {
    switch (l()) {
        case "adult":
            return c.intl.string(c.t.XxRj7f);
        case "teen":
            return c.intl.string(c.t.sK0dmH);
        case "unverified":
            return c.intl.string(c.t.lKDPGA);
    }
}
