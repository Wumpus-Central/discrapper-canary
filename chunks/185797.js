n.d(t, { F: () => u });
var a = n(743368),
    i = n(975807),
    r = n(723702),
    s = n(777376),
    l = n(758209),
    c = n(915418),
    o = n(237146),
    d = n(985018);
function u() {
    let e,
        { status: t, requestInProgress: n, redirect: u } = (0, c.r)(),
        _ = (0, l.A)(u),
        m = (function (e) {
            switch (e) {
                case s.p1.NOT_CLAIMED:
                case s.p1.CLAIM_IN_PROGRESS:
                    return { text: d.intl.string(o.default.EL3rU4) };
                case s.p1.CLAIMED:
                    return { text: d.intl.string(o.default["0mQ2U6"]), icon: a.W, iconPosition: "end" };
                case s.p1.CANCELLATION_IN_PROGRESS:
                    return { text: d.intl.string(o.default.wBz9aO), disabled: !0 };
            }
        })(t);
    return (
        t === s.p1.NOT_CLAIMED || t === s.p1.CLAIM_IN_PROGRESS
            ? (e = () => {
                  _();
              })
            : t === s.p1.CLAIMED && (e = () => (0, i.A)((0, r.isWindows)() ? "msxbox://" : "https://xbox.com/play")),
        {
            claimStatus: t,
            requestInProgress: n,
            text: m.text,
            disabled: (m.disabled ?? !1) || n,
            loading: n,
            icon: m.icon,
            iconPosition: m.iconPosition,
            onClick: e,
        }
    );
}
