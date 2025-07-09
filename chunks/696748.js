(n.d(e, { a: () => j }), n(953529), n(415506), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(913527),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    d = n(372123),
    u = n(224706),
    p = n(812206),
    h = n(600164),
    f = n(293245),
    y = n(626135),
    C = n(981631),
    O = n(388032),
    g = n(50611),
    m = n(20493);
function b(t, e, n) {
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
function N(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            i.forEach(function (e) {
                b(t, e, n[e]);
            }));
    }
    return t;
}
class T extends r.PureComponent {
    renderConflictButton(t, e, n, r) {
        return (0, i.jsxs)(s.zx, {
            className: g.conflictButton,
            innerClassName: g.conflictButtonInner,
            onClick: r,
            children: [
                (0, i.jsx)('div', { className: n }),
                (0, i.jsxs)('div', {
                    className: g.buttonBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: g.conflictTitle,
                            children: t
                        }),
                        (0, i.jsx)('div', { children: O.intl.string(O.t.gflHOz) }),
                        (0, i.jsx)('div', {
                            className: g.timestamp,
                            children: a()(e).calendar()
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
                (0, i.jsxs)(c.hzk, {
                    children: [
                        (0, i.jsx)(h.Z, {
                            justify: h.Z.Justify.CENTER,
                            children: (0, i.jsx)('div', { className: g.errorArt })
                        }),
                        (0, i.jsx)('div', {
                            className: g.description,
                            children: O.intl.format(O.t.RAaWyc, { applicationName: t.name })
                        })
                    ]
                }),
                (0, i.jsx)(c.mzw, {
                    children: (0, i.jsxs)(h.Z, {
                        justify: h.Z.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(s.zx, {
                                className: g.linkButton,
                                size: g.linkButtonSize,
                                look: s.zx.Looks.LINK,
                                color: s.zx.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: O.intl.string(O.t['ETE/oK'])
                            }),
                            (0, i.jsxs)(h.Z, {
                                direction: h.Z.Direction.HORIZONTAL,
                                justify: h.Z.Justify.END,
                                children: [
                                    (0, i.jsx)('div', {
                                        'data-button-hoisted-classname-wrapper': !0,
                                        className: g.retryButton,
                                        children: (0, i.jsx)(c.zxk, {
                                            variant: 'secondary',
                                            text: O.intl.string(O.t['5911LS']),
                                            onClick: () => this.handlePlay()
                                        })
                                    }),
                                    (0, i.jsx)(c.zxk, {
                                        variant: 'primary',
                                        text: O.intl.string(O.t['359PbW']),
                                        onClick: () => this.handlePlay(!1)
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
        if (e.type !== C.TzF.CONFLICT) throw Error('Cannot render conflict for non conflict type');
        return (0, i.jsxs)(c.hzk, {
            className: m.marginBottom20,
            children: [
                (0, i.jsx)('div', {
                    className: g.description,
                    children: O.intl.format(O.t.eyXUPz, { applicationName: t.name })
                }),
                this.renderConflictButton(O.intl.string(O.t.AQUmkp), e.remote.timestamp, g.conflictDownloadArt, this.handleChooseDownload),
                (0, i.jsxs)(h.Z, {
                    className: g.choiceWrapper,
                    align: h.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: g.choiceLine }),
                        (0, i.jsx)('div', {
                            className: g.choiceTitle,
                            children: O.intl.string(O.t.WUsA2N)
                        }),
                        (0, i.jsx)('div', { className: g.choiceLine })
                    ]
                }),
                this.renderConflictButton(O.intl.string(O.t.AXVws7), e.next.timestamp, g.conflictUploadArt, this.handleChooseUpload)
            ]
        });
    }
    render() {
        let { cloudSyncState: t, transitionState: e } = this.props,
            n = t.type === C.TzF.CONFLICT ? O.intl.string(O.t.oNbO1d) : O.intl.string(O.t.as4Tgo);
        return (0, i.jsxs)(c.Y0X, {
            transitionState: e,
            className: g.modal,
            'aria-label': n,
            parentComponent: 'CloudSyncResolutionModal',
            children: [
                (0, i.jsxs)(c.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(c.olH, {
                            className: g.closeButton,
                            onClick: this.onClose
                        }),
                        (0, i.jsx)(c.vwX, {
                            tag: 'h2',
                            className: m.marginReset,
                            children: n
                        })
                    ]
                }),
                t.type === C.TzF.CONFLICT ? this.renderConflict() : this.renderError()
            ]
        });
    }
    constructor(...t) {
        var e;
        (super(...t),
            (e = this),
            b(this, 'onClose', () => {
                this.props.onClose();
            }),
            b(this, 'handlePlay', function () {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { libraryApplication: i, analyticsParams: r } = e.props;
                (e.onClose(),
                    j(i.id, i, {
                        analyticsParams: r,
                        cloudSync: t,
                        cloudSyncForceHash: n
                    }));
            }),
            b(this, 'handleChooseDownload', () => {
                let { cloudSyncState: t } = this.props;
                t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
            }),
            b(this, 'handleChooseUpload', () => {
                let { cloudSyncState: t } = this.props;
                t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
            }));
    }
}
let A = o.ZP.connectStores([f.Z, p.Z], (t) => {
    let { libraryApplication: e, branchId: n } = t;
    return {
        cloudSyncState: f.Z.getState(e.id, n),
        application: p.Z.getApplication(e.id)
    };
})(T);
async function j(t, e, n) {
    let r = p.Z.getApplication(t);
    if (null == r) return;
    let { cloudSync: l = !0, cloudSyncForceHash: a = null, analyticsParams: o } = n;
    if (l && null != e) {
        let t = e.branchId;
        try {
            await d.Z(e.id, t, a);
        } catch (n) {
            (0, c.h7j)((n) =>
                (0, i.jsx)(
                    A,
                    N(
                        {
                            libraryApplication: e,
                            analyticsParams: o,
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
        y.default.track(
            C.rMx.APPLICATION_OPENED,
            N(
                {
                    application_id: r.id,
                    application_name: r.name,
                    type: C.q5t.LAUNCH,
                    distributor: null != e ? e.getDistributor() : null
                },
                o
            )
        ),
        u.Z.launch({
            applicationId: r.id,
            branchId: null == e ? void 0 : e.branchId
        })
    );
}
