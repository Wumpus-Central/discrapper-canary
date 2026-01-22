n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(892227),
    o = n(311907),
    l = n(827734),
    c = n(732955),
    u = n(613566),
    d = n(895944),
    f = n(649032),
    p = n(927813),
    _ = n(397691);
let h = {
        churning: {
            start: l.A.unsafe_rawColors.OPACITY_RED_80.css,
            end: l.A.unsafe_rawColors.RED_NEW_30.css,
        },
        active: {
            start: l.A.unsafe_rawColors.OPACITY_GREEN_80.css,
            end: l.A.unsafe_rawColors.GREEN_NEW_30.css,
        },
    },
    m = (e) => {
        let { className: t } = e,
            { passesProgressBarInvariant: n, programReward: i } = (0, o.cf)([d.A], () => ({
                passesProgressBarInvariant: d.A.passesProgressBarInvariant(f.W.NITRO),
                programReward: d.A.getRewardForProgram(f.W.NITRO),
            }));
        if (!n || null == i) return null;
        let l = i.total_countdown_duration_ms / p.A.Millis.DAY,
            m = (0, s.default)(new Date(i.next_reward_date), new Date()),
            g = i.program_current_state === f.L.PREMIUM_CHURNING,
            E = g ? h.churning.start : h.active.start,
            b = g ? h.churning.end : h.active.end;
        return (0, r.jsxs)("div", {
            className: a()(_.k, t),
            children: [
                (0, r.jsx)(u.Ay, {
                    variant: u.qP.UNSET,
                    progress: l - m,
                    maximum: l,
                    override: {
                        default: {
                            gradientStart: E,
                            gradientEnd: b,
                        },
                    },
                }),
                g
                    ? (0, r.jsx)(c.tvc, {
                          size: "sm",
                          color: "currentColor",
                          className: _.K,
                      })
                    : (0, r.jsx)(c.Cp8, {
                          size: "sm",
                          color: "currentColor",
                          className: _.K,
                      }),
            ],
        });
    };
