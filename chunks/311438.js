n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(732955),
    o = n(397927),
    l = n(827343),
    c = n(386406),
    u = n(237496),
    d = n(652215),
    f = n(985018);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    return (0, r.jsx)(
        s.aFV,
        _(
            {
                size: "md",
                title: f.intl.string(f.t.NYklhr),
                subtitle: f.intl.string(f.t.EJ26Oh),
                actions: [
                    {
                        text: f.intl.string(f.t.UYW0dz),
                        onClick: () => {
                            e.onClose(), c.A.clearVADWarning();
                        },
                        variant: "secondary",
                    },
                    {
                        text: f.intl.string(f.t.E3Y7NH),
                        onClick: () => {
                            l.A.setMode(d.TBI.PUSH_TO_TALK), e.onClose(), c.A.clearVADWarning();
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
    let e = (0, a.bG)([u.A], () => u.A.shouldShowWarning(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, o.OoC)(t.current), (t.current = null));
    }
    return (
        i.useEffect(
            () => (
                e ? (t.current = (0, o.qfG)((e) => (0, r.jsx)(h, _({}, e)))) : n(),
                () => {
                    n();
                }
            ),
            [e],
        ),
        null
    );
}
