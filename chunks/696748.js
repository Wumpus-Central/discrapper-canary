n.d(e, { a: () => T }), n(266796), n(411104), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(913527),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(372123),
    d = n(224706),
    u = n(812206),
    p = n(600164),
    h = n(293245),
    f = n(626135),
    y = n(981631),
    C = n(388032),
    O = n(50611),
    N = n(20493);
function g(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
function b(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            i.forEach(function (e) {
                g(t, e, n[e]);
            });
    }
    return t;
}
class m extends r.PureComponent {
    renderConflictButton(t, e, n, r) {
        return (0, i.jsxs)(s.zxk, {
            className: O.conflictButton,
            innerClassName: O.conflictButtonInner,
            onClick: r,
            children: [
                (0, i.jsx)('div', { className: n }),
                (0, i.jsxs)('div', {
                    className: O.buttonBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: O.conflictTitle,
                            children: t
                        }),
                        (0, i.jsx)('div', { children: C.NW.string(C.t.gflHOz) }),
                        (0, i.jsx)('div', {
                            className: O.timestamp,
                            children: l()(e).calendar()
                        })
                    ]
                })
            ]
        });
    }
    renderError() {
        let { application: t } = this.props;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsxs)(s.hzk, {
                    children: [
                        (0, i.jsx)(p.Z, {
                            justify: p.Z.Justify.CENTER,
                            children: (0, i.jsx)('div', { className: O.errorArt })
                        }),
                        (0, i.jsx)('div', {
                            className: O.description,
                            children: C.NW.format(C.t.RAaWyc, { applicationName: t.name })
                        })
                    ]
                }),
                (0, i.jsx)(s.mzw, {
                    children: (0, i.jsxs)(p.Z, {
                        justify: p.Z.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(s.zxk, {
                                className: O.linkButton,
                                size: O.linkButtonSize,
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: C.NW.string(C.t['ETE/oK'])
                            }),
                            (0, i.jsxs)(p.Z, {
                                direction: p.Z.Direction.HORIZONTAL,
                                justify: p.Z.Justify.END,
                                children: [
                                    (0, i.jsx)(s.zxk, {
                                        look: s.zxk.Looks.LINK,
                                        color: s.zxk.Colors.PRIMARY,
                                        onClick: () => this.handlePlay(),
                                        className: O.retryButton,
                                        children: C.NW.string(C.t['5911LS'])
                                    }),
                                    (0, i.jsx)(s.zxk, {
                                        onClick: () => this.handlePlay(!1),
                                        children: C.NW.string(C.t['359PbW'])
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
    renderConflict() {
        let { application: t, cloudSyncState: e } = this.props;
        if (e.type !== y.TzF.CONFLICT) throw Error('Cannot render conflict for non conflict type');
        return (0, i.jsxs)(s.hzk, {
            className: N.marginBottom20,
            children: [
                (0, i.jsx)('div', {
                    className: O.description,
                    children: C.NW.format(C.t.eyXUPz, { applicationName: t.name })
                }),
                this.renderConflictButton(C.NW.string(C.t.AQUmkp), e.remote.timestamp, O.conflictDownloadArt, this.handleChooseDownload),
                (0, i.jsxs)(p.Z, {
                    className: O.choiceWrapper,
                    align: p.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: O.choiceLine }),
                        (0, i.jsx)('div', {
                            className: O.choiceTitle,
                            children: C.NW.string(C.t.WUsA2N)
                        }),
                        (0, i.jsx)('div', { className: O.choiceLine })
                    ]
                }),
                this.renderConflictButton(C.NW.string(C.t.AXVws7), e.next.timestamp, O.conflictUploadArt, this.handleChooseUpload)
            ]
        });
    }
    render() {
        let { cloudSyncState: t, transitionState: e } = this.props,
            n = t.type === y.TzF.CONFLICT ? C.NW.string(C.t.oNbO1d) : C.NW.string(C.t.as4Tgo);
        return (0, i.jsxs)(s.Y0X, {
            transitionState: e,
            className: O.modal,
            'aria-label': n,
            children: [
                (0, i.jsxs)(s.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.olH, {
                            className: O.closeButton,
                            onClick: this.onClose
                        }),
                        (0, i.jsx)(s.vwX, {
                            tag: 'h2',
                            className: N.marginReset,
                            children: n
                        })
                    ]
                }),
                t.type === y.TzF.CONFLICT ? this.renderConflict() : this.renderError()
            ]
        });
    }
    constructor(...t) {
        var e;
        super(...t),
            (e = this),
            g(this, 'onClose', () => {
                this.props.onClose();
            }),
            g(this, 'handlePlay', function () {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { libraryApplication: i, analyticsParams: r } = e.props;
                e.onClose(),
                    T(i.id, i, {
                        analyticsParams: r,
                        cloudSync: t,
                        cloudSyncForceHash: n
                    });
            }),
            g(this, 'handleChooseDownload', () => {
                let { cloudSyncState: t } = this.props;
                t.type === y.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
            }),
            g(this, 'handleChooseUpload', () => {
                let { cloudSyncState: t } = this.props;
                t.type === y.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
            });
    }
}
let A = a.ZP.connectStores([h.Z, u.Z], (t) => {
    let { libraryApplication: e, branchId: n } = t;
    return {
        cloudSyncState: h.Z.getState(e.id, n),
        application: u.Z.getApplication(e.id)
    };
})(m);
async function T(t, e, n) {
    let r = u.Z.getApplication(t);
    if (null == r) return;
    let { cloudSync: o = !0, cloudSyncForceHash: l = null, analyticsParams: a } = n;
    if (o && null != e) {
        let t = e.branchId;
        try {
            await c.Z(e.id, t, l);
        } catch (n) {
            (0, s.h7j)((n) =>
                (0, i.jsx)(
                    A,
                    b(
                        {
                            libraryApplication: e,
                            analyticsParams: a,
                            branchId: t
                        },
                        n
                    )
                )
            );
            return;
        }
    }
    return (
        f.default.track(
            y.rMx.APPLICATION_OPENED,
            b(
                {
                    application_id: r.id,
                    application_name: r.name,
                    type: y.q5t.LAUNCH,
                    distributor: null != e ? e.getDistributor() : null
                },
                a
            )
        ),
        d.Z.launch({
            applicationId: r.id,
            branchId: null == e ? void 0 : e.branchId
        })
    );
}
