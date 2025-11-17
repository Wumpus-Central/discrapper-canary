n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(159691),
    s = n(481060),
    l = n(846027),
    c = n(923928),
    u = n(269647),
    d = n(981631),
    f = n(388032);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    return (0, r.jsx)(
        o.u_l,
        p(
            {
                size: "md",
                title: f.intl.string(f.t.NYklhr),
                subtitle: f.intl.string(f.t.EJ26Oh),
                actions: [
                    {
                        text: f.intl.string(f.t.UYW0dz),
                        onClick: () => {
                            e.onClose(), c.Z.clearVADWarning();
                        },
                        variant: "secondary",
                    },
                    {
                        text: f.intl.string(f.t.E3Y7NH),
                        onClick: () => {
                            l.Z.setMode(d.pM4.PUSH_TO_TALK), e.onClose(), c.Z.clearVADWarning();
                        },
                        variant: "primary",
                    },
                ],
            },
            e,
        ),
    );
}
function m() {
    let e = (0, a.e7)([u.Z], () => u.Z.shouldShowWarning(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, s.Mr3)(t.current), (t.current = null));
    }
    return (
        i.useEffect(
            () => (
                e ? (t.current = (0, s.h7j)((e) => (0, r.jsx)(h, p({}, e)))) : n(),
                () => {
                    n();
                }
            ),
            [e],
        ),
        null
    );
}
