n.d(t, { default: () => p }), n(388685), n(953529);
var r = n(200651),
    a = n(192379),
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
        [k, j] = a.useState('unreported'),
        [C, b] = a.useState(''),
        [N, f] = a.useState(!1),
        [y, R] = a.useState(!1),
        [S, z] = a.useState(!1),
        [I, w] = a.useState(!1),
        A = (0, i.e7)([u.Z, d.ZP], () => {
            var e;
            let t = null != v ? v : null == (e = d.ZP.getCurrentGameForAnalytics()) ? void 0 : e.id;
            return null == t ? null : u.Z.getDetectableGame(t);
        }),
        M = (0, i.e7)([_.default], () => {
            var e;
            let t = null != (e = null === _.default || void 0 === _.default ? void 0 : _.default.getMostRecentOverlayRenderMethod()) ? e : void 0;
            return null != t ? l.gl[t] : void 0;
        }),
        P = a.useMemo(() => {
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
            if ('unreported' === k && 0 === C.length) {
                z(!0), await (0, s._v)(100), z(!1), w(!0);
                return;
            }
            f(!0),
                await m.default.track(x.rMx.OVERLAY_DISABLED_SURVEY, {
                    reason: k,
                    comment: C,
                    client_setting_type: p,
                    application_id: null == A ? void 0 : A.id,
                    application_name: null == A ? void 0 : A.name,
                    most_recent_overlay_render_method: M
                }),
                await (0, s._v)(1000),
                f(!1),
                R(!0),
                await (0, s._v)(1500),
                t();
        };
    return (
        (0, c.ZP)(() => {
            m.default.track(x.rMx.OPEN_MODAL, { type: 'overlay_disabled_questionnaire_modal' });
        }),
        (0, r.jsxs)(o.Y0X, {
            transitionState: n,
            'aria-label': h.intl.string(h.t.bomhnZ),
            size: o.CgR.DYNAMIC,
            className: g.root,
            children: [
                (0, r.jsxs)(o.xBx, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: g.header,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: 'heading-lg/semibold',
                                    color: 'header-primary',
                                    children: h.intl.string(h.t['9JKzxc'])
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    className: g.description,
                                    children: h.intl.string(h.t['2yjnmZ'])
                                })
                            ]
                        }),
                        (0, r.jsx)(o.olH, {
                            onClick: t,
                            className: g.closeButton
                        })
                    ]
                }),
                (0, r.jsx)(o.hzk, {
                    className: g.reasonContainer,
                    children: (0, r.jsxs)(o.Ttm, {
                        children: [
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)(o.UkV, {
                                        isShaking: S,
                                        intensity: 1,
                                        className: g.radioHeader,
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-sm/semibold',
                                            color: I ? 'text-danger' : 'text-muted',
                                            children: h.intl.string(h.t.yhUvdX)
                                        })
                                    }),
                                    (0, r.jsx)(o.FXm, {
                                        value: k,
                                        radioItemClassName: g.radioItem,
                                        className: g.radioGroup,
                                        radioPosition: 'right',
                                        options: P,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            j(t), w(!1), z(!1);
                                        }
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: g.commentContainer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'text-muted',
                                        className: g.commentHeader,
                                        children: h.intl.string(h.t.LYnrhY)
                                    }),
                                    (0, r.jsx)(o.Kx8, {
                                        autosize: !0,
                                        value: C,
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
                (0, r.jsxs)(o.mzw, {
                    className: g.buttons,
                    children: [
                        (0, r.jsx)(o.zxk, {
                            disabled: N,
                            onClick: () => {
                                t();
                            },
                            color: o.zxk.Colors.PRIMARY,
                            children: h.intl.string(h.t['5WxrcX'])
                        }),
                        (0, r.jsx)(o.UkV, {
                            isShaking: S,
                            intensity: 1,
                            children: (0, r.jsx)(o.zxk, {
                                disabled: N,
                                submitting: N,
                                onClick: B,
                                color: (() => {
                                    switch (!0) {
                                        case y:
                                            return o.zxk.Colors.GREEN;
                                        case S:
                                            return o.zxk.Colors.PRIMARY;
                                        default:
                                            return o.zxk.Colors.BRAND;
                                    }
                                })(),
                                children: (() => {
                                    switch (!0) {
                                        case y:
                                            return (0, r.jsx)(o.kmB, {});
                                        case N:
                                            return (0, r.jsx)(o.$jN, { type: o.RAz.PULSING_ELLIPSIS });
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
