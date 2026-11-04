var i,
    r = n(975571),
    s = n(871309),
    a = n(171576),
    l = n(36149),
    o = n(652215),
    c = n(792996),
    u = (((i = {}).ADULT = "adult"), (i.TEEN = "teen"), (i.UNVERIFIED = "unverified"), i);
function d() {
    let t = (0, l.b8)();
    return (0, l.yM)() ? "teen" : t ? "adult" : "unverified";
}
n.d(
    e,
    {},
    {
        M$: u,
        M0: function () {
            s.A.openUrl(r.A.getArticleURL(o.MVz.AGE_VERIFICATION_LEARN_MORE));
        },
        ZP: d,
        aP: function () {
            s.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.ACCOUNT_AGE_GROUP });
        },
        hD: function () {
            switch (d()) {
                case "adult":
                    return c.intl.string(c.t.XxRj7f);
                case "teen":
                    return c.intl.string(c.t.sK0dmH);
                case "unverified":
                    return c.intl.string(c.t.lKDPGA);
            }
        },
    },
);
