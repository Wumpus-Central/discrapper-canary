(n.d(t, { default: () => v }), n(388685), n(953529));
var a = n(255367),
    r = n(73800),
    i = n(442837),
    s = n(379649),
    o = n(755721),
    l = n(481060),
    d = n(493773),
    c = n(594190),
    u = n(77498),
    m = n(626135),
    _ = n(837268),
    x = n(371651),
    h = n(981631),
    g = n(388032),
    p = n(933150);
function v(e) {
    let { onClose: t, transitionState: n, clientSettingType: v, gameId: j } = e,
        [C, k] = r.useState('unreported'),
        [b, y] = r.useState(''),
        [N, f] = r.useState(!1),
        [S, R] = r.useState(!1),
        [z, w] = r.useState(!1),
        [I, M] = r.useState(!1),
        A = (0, i.e7)([u.Z, c.ZP], () => {
            var e;
            let t = null != j ? j : null == (e = c.ZP.getCurrentGameForAnalytics()) ? void 0 : e.id;
            return null == t ? null : u.Z.getDetectableGame(t);
        }),
        B = (0, i.e7)([x.default], () => {
            var e;
            let t = null != (e = null === x.default || void 0 === x.default ? void 0 : x.default.getMostRecentOverlayRenderMethod()) ? e : void 0;
            return null != t ? _.gl[t] : void 0;
        }),
        H = r.useMemo(() => {
            let e = {
                not_working: g.t.CHXHFR,
                not_useful: g.t.a95skZ,
                dont_like_changes: g.t.vgqMGx,
                game_crashes_occurred: g.t.IFZ0SU,
                poor_performance: g.t.exRczs,
                bad_experience: g.t.qOm5R0,
                too_many_notifications: g.t.XuBFBA,
                other: g.t['YP/Ttr']
            };
            return Object.keys(e).map((t) => ({
                name: g.intl.string(e[t]),
                value: t
            }));
        }, []),
        P = async () => {
            if ('unreported' === C && 0 === b.length) {
                (w(!0), await (0, s._v)(100), w(!1), M(!0));
                return;
            }
            (f(!0),
                await m.default.track(h.rMx.OVERLAY_DISABLED_SURVEY, {
                    reason: C,
                    comment: b,
                    client_setting_type: v,
                    application_id: null == A ? void 0 : A.id,
                    application_name: null == A ? void 0 : A.name,
                    most_recent_overlay_render_method: B
                }),
                await (0, s._v)(1000),
                f(!1),
                R(!0),
                await (0, s._v)(1500),
                t());
        };
    return (
        (0, d.ZP)(() => {
            m.default.track(h.rMx.OPEN_MODAL, { type: 'overlay_disabled_questionnaire_modal' });
        }),
        (0, a.jsxs)(l.Y0X, {
            transitionState: n,
            'aria-label': g.intl.string(g.t.bomhnZ),
            size: l.CgR.DYNAMIC,
            className: p.root,
            parentComponent: 'OverlayDisabledSurveyModal',
            children: [
                (0, a.jsxs)(l.xBx, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: p.header,
                            children: [
                                (0, a.jsx)(l.X6q, {
                                    variant: 'heading-lg/semibold',
                                    color: 'header-primary',
                                    children: g.intl.string(g.t['9JKzxc'])
                                }),
                                (0, a.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    className: p.description,
                                    children: g.intl.string(g.t['2yjnmZ'])
                                })
                            ]
                        }),
                        (0, a.jsx)(l.olH, {
                            onClick: t,
                            className: p.closeButton
                        })
                    ]
                }),
                (0, a.jsx)(l.hzk, {
                    className: p.reasonContainer,
                    children: (0, a.jsxs)(l.Ttm, {
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(l.UkV, {
                                        isShaking: z,
                                        intensity: 1,
                                        className: p.radioHeader,
                                        children: (0, a.jsx)(l.Text, {
                                            variant: 'text-sm/semibold',
                                            color: I ? 'text-danger' : 'text-muted',
                                            children: g.intl.string(g.t.yhUvdX)
                                        })
                                    }),
                                    (0, a.jsx)(l.FXm, {
                                        value: C,
                                        radioItemClassName: p.radioItem,
                                        className: p.radioGroup,
                                        radioPosition: 'right',
                                        options: H,
                                        onChange: (e) => {
                                            let { value: t } = e;
                                            (k(t), M(!1), w(!1));
                                        }
                                    })
                                ]
                            }),
                            (0, a.jsxs)('div', {
                                className: p.commentContainer,
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'text-muted',
                                        className: p.commentHeader,
                                        children: g.intl.string(g.t.LYnrhY)
                                    }),
                                    (0, a.jsx)(l.Kx8, {
                                        autosize: !0,
                                        value: b,
                                        maxLength: 1000,
                                        showRemainingCharacterCount: !1,
                                        placeholder: g.intl.string(g.t['gU+bVF']),
                                        onChange: y
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, a.jsxs)(l.mzw, {
                    className: p.buttons,
                    children: [
                        (0, a.jsx)(l.zxk, {
                            variant: 'secondary',
                            text: g.intl.string(g.t['5WxrcX']),
                            disabled: N,
                            onClick: () => {
                                t();
                            }
                        }),
                        (0, a.jsx)(l.UkV, {
                            isShaking: z,
                            intensity: 1,
                            children: (0, a.jsx)(o.zx, {
                                disabled: N,
                                submitting: N,
                                onClick: P,
                                color: (() => {
                                    switch (!0) {
                                        case S:
                                            return o.zx.Colors.GREEN;
                                        case z:
                                            return o.zx.Colors.PRIMARY;
                                        default:
                                            return o.zx.Colors.BRAND;
                                    }
                                })(),
                                children: (() => {
                                    switch (!0) {
                                        case S:
                                            return (0, a.jsx)(l.kmB, {});
                                        case N:
                                            return (0, a.jsx)(l.$jN, { type: l.RAz.PULSING_ELLIPSIS });
                                        default:
                                            return g.intl.string(g.t.geKm7u);
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
