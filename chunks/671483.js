e.d(t, {
    A: () => h,
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(435183),
    s = e(532622),
    c = e(136523),
    o = e(345640),
    d = e(576705),
    u = e(309698),
    A = e(652215),
    b = e(985018);

function h(n, t) {
    let h = (0, l.bG)([d.A], () => d.A.can(A.xBc.MANAGE_CHANNELS, t)),
        g = (0, s.Ay)(n),
        j = (0, o.b)(n),
        v = (0, l.bG)([u.A], () => u.A.getChannelStatus(n)),
        p = null != v && v.length > 0;
    return n.isGuildVoice() && (h || g)
        ? !j && h && p
            ? (0, i.jsx)(r.Drp, {
                  id: "clear-status",
                  label: b.intl.string(b.t["22CYiZ"]),
                  action: () => {
                      a.Ay.updateVoiceChannelStatus(n.id, "");
                  },
              })
            : j && g
              ? (0, i.jsx)(r.Drp, {
                    id: "set-status",
                    label: b.intl.string(b.t.RBd5PW),
                    action: () => {
                        (0, r.mMO)(
                            async () => {
                                let { default: t } = await Promise.resolve().then(e.bind(e, 136523));
                                return (e) =>
                                    (0, i.jsx)(
                                        t,
                                        (function (n) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var e = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(e);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(e).filter(function (n) {
                                                            return Object.getOwnPropertyDescriptor(e, n).enumerable;
                                                        }),
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = e[t]),
                                                            t in n
                                                                ? Object.defineProperty(n, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (n[t] = i);
                                                    });
                                            }
                                            return n;
                                        })(
                                            {
                                                channel: n,
                                            },
                                            e,
                                        ),
                                    );
                            },
                            {
                                modalKey: c.m,
                            },
                        );
                    },
                })
              : null
        : null;
}
