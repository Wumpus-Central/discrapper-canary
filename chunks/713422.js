n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(995638),
    s = n(442837),
    l = n(692547),
    c = n(159691),
    u = n(527685),
    d = n(468208),
    f = n(165299),
    p = n(70956),
    _ = n(521472);
let h = {
        churning: {
            start: l.Z.unsafe_rawColors.OPACITY_RED_80.css,
            end: l.Z.unsafe_rawColors.RED_NEW_30.css,
        },
        active: {
            start: l.Z.unsafe_rawColors.OPACITY_GREEN_80.css,
            end: l.Z.unsafe_rawColors.GREEN_NEW_30.css,
        },
    },
    m = (e) => {
        let { className: t } = e,
            { passesProgressBarInvariant: n, programReward: i } = (0, s.cj)([d.Z], () => ({
                passesProgressBarInvariant: d.Z.passesProgressBarInvariant(f.f.NITRO),
                programReward: d.Z.getRewardForProgram(f.f.NITRO),
            }));
        if (!n || null == i) return null;
        let l = i.total_countdown_duration_ms / p.Z.Millis.DAY,
            m = (0, o.default)(new Date(i.next_reward_date), new Date()),
            g = i.program_current_state === f.g.PREMIUM_CHURNING,
            E = g ? h.churning.start : h.active.start,
            b = g ? h.churning.end : h.active.end;
        return (0, r.jsxs)("div", {
            className: a()(_.container, t),
            children: [
                (0, r.jsx)(u.ZP, {
                    variant: u.yB.UNSET,
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
                    ? (0, r.jsx)(c.SrA, {
                          size: "sm",
                          color: "currentColor",
                          className: _.icon,
                      })
                    : (0, r.jsx)(c.aQr, {
                          size: "sm",
                          color: "currentColor",
                          className: _.icon,
                      }),
            ],
        });
    };
