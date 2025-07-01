(n.d(t, { default: () => p }), n(388685), n(953529));
var a = n(255367),
    r = n(73800),
    i = n(442837),
    s = n(379649),
    o = n(481060),
    l = n(615287),
    c = n(493773),
    d = n(594190),
    u = n(77498),
    m = n(626135),
    _ = n(371651),
    x = n(981631),
    h = n(388032),
    g = n(933150);
function p(e) {
    let { onClose: t, transitionState: n, clientSettingType: p, gameId: v } = e,
        [k, C] = r.useState('unreported'),
        [j, b] = r.useState(''),
        [y, N] = r.useState(!1),
        [f, R] = r.useState(!1),
        [S, z] = r.useState(!1),
        [I, w] = r.useState(!1),
        M = (0, i.e7)([u.Z, d.ZP], () => {
            var e;
            let t = null != v ? v : null == (e = d.ZP.getCurrentGameForAnalytics()) ? void 0 : e.id;
            return null == t ? null : u.Z.getDetectableGame(t);
        }),
        A = (0, i.e7)([_.default], () => {
            var e;
            let t = null != (e = null === _.default || void 0 === _.default ? void 0 : _.default.getMostRecentOverlayRenderMethod()) ? e : void 0;
            return null != t ? l.gl[t] : void 0;
        }),
        P = r.useMemo(() => {
            let e = {
                not_working: h.t.CHXHFR,
                not_useful: h.t.a95skZ,
                dont_like_changes: h.t.vgqMGx,
                game_crashes_occurred: h.t.IFZ0SU,
                poor_performance: h.t.exRczs,
                bad_experience: h.t.qOm5R0,
                too_many_notifications: h.t.XuBFBA,
                other: h.t['YP/Ttr']
            };
            return Object.keys(e).map((t) => ({
                name: h.intl.string(e[t]),
                value: t
            }));
        }, []),
        B = async () => {
            if ('unreported' === k && 0 === j.length) {
                (z(!0), await (0, s._v)(100), z(!1), w(!0));
                return;
            }
            (N(!0),
                await m.default.track(x.rMx.OVERLAY_DISABLED_SURVEY, {
                    reason: k,
                    comment: j,
                    client_setting_type: p,
                    application_id: null == M ? void 0 : M.id,
                    application_name: null == M ? void 0 : M.name,
                    most_recent_overlay_render_method: A
                }),
                await (0, s._v)(1000),
                N(!1),
                R(!0),
                await (0, s._v)(1500),
                t());
        };
    return (
        (0, c.ZP)(() => {
            m.default.track(x.rMx.OPEN_MODAL, { type: 'overlay_disabled_questionnaire_modal' });
        }),
        (0, a.jsxs)(o.Y0X, {
            transitionState: n,
            'aria-label': h.intl.string(h.t.bomhnZ),
            size: o.CgR.DYNAMIC,
            className: g.root,
            parentComponent: 'OverlayDisabledSurveyModal',
            children: [
                (0, a.jsxs)(o.xBx, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: g.header,
                            children: [
                                (0, a.jsx)(o.X6q, {
                                    variant: 'heading-lg/semibold',
                                    color: 'header-primary',
                                    children: h.intl.string(h.t['9JKzxc'])
                                }),
                                (0, a.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    className: g.description,
                                    children: h.intl.string(h.t['2yjnmZ'])
                                })
                            ]
                        }),
                        (0, a.jsx)(o.olH, {
                            onClick: t,
                            className: g.closeButton
                        })
                    ]
                }),
                (0, a.jsx)(o.hzk, {
                    className: g.reasonContainer,
                    children: (0, a.jsxs)(o.Ttm, {
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(o.UkV, {
                                        isShaking: S,
                                        intensity: 1,
                                        className: g.radioHeader,
                                        children: (0, a.jsx)(o.Text, {
                                            variant: 'text-sm/semibold',
                                            color: I ? 'text-danger' : 'text-muted',
                                            children: h.intl.string(h.t.yhUvdX)
                                        })
                                    }),
                                    (0, a.jsx)(o.FXm, {
                                        value: k,
                                        radioItemClassName: g.radioItem,
                                        className: g.radioGroup,
                                        radioPosition: 'right',
                                        options: P,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            (C(t), w(!1), z(!1));
                                        }
                                    })
                                ]
                            }),
                            (0, a.jsxs)('div', {
                                className: g.commentContainer,
                                children: [
                                    (0, a.jsx)(o.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'text-muted',
                                        className: g.commentHeader,
                                        children: h.intl.string(h.t.LYnrhY)
                                    }),
                                    (0, a.jsx)(o.Kx8, {
                                        autosize: !0,
                                        value: j,
                                        maxLength: 1000,
                                        showRemainingCharacterCount: !1,
                                        placeholder: h.intl.string(h.t['gU+bVF']),
                                        onChange: b
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, a.jsxs)(o.mzw, {
                    className: g.buttons,
                    children: [
                        (0, a.jsx)(o.zxk, {
                            disabled: y,
                            onClick: () => {
                                t();
                            },
                            color: o.zxk.Colors.PRIMARY,
                            children: h.intl.string(h.t['5WxrcX'])
                        }),
                        (0, a.jsx)(o.UkV, {
                            isShaking: S,
                            intensity: 1,
                            children: (0, a.jsx)(o.zxk, {
                                disabled: y,
                                submitting: y,
                                onClick: B,
                                color: (() => {
                                    switch (!0) {
                                        case f:
                                            return o.zxk.Colors.GREEN;
                                        case S:
                                            return o.zxk.Colors.PRIMARY;
                                        default:
                                            return o.zxk.Colors.BRAND;
                                    }
                                })(),
                                children: (() => {
                                    switch (!0) {
                                        case f:
                                            return (0, a.jsx)(o.kmB, {});
                                        case y:
                                            return (0, a.jsx)(o.$jN, { type: o.RAz.PULSING_ELLIPSIS });
                                        default:
                                            return h.intl.string(h.t.geKm7u);
                                    }
                                })()
                            })
                        })
                    ]
                })
            ]
        })
    );
}
