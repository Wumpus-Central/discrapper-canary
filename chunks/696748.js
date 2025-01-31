n.d(e, { a: () => O }), n(411104), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(913527),
    s = n.n(a),
    o = n(442837),
    r = n(481060),
    c = n(372123),
    d = n(224706),
    u = n(812206),
    p = n(600164),
    h = n(293245),
    f = n(626135),
    C = n(981631),
    y = n(388032),
    N = n(678099),
    m = n(232186);
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
class A extends l.PureComponent {
    renderConflictButton(t, e, n, l) {
        return (0, i.jsxs)(r.zxk, {
            className: N.conflictButton,
            innerClassName: N.conflictButtonInner,
            onClick: l,
            children: [
                (0, i.jsx)('div', { className: n }),
                (0, i.jsxs)('div', {
                    className: N.buttonBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: N.conflictTitle,
                            children: t
                        }),
                        (0, i.jsx)('div', { children: y.intl.string(y.t.gflHOz) }),
                        (0, i.jsx)('div', {
                            className: N.timestamp,
                            children: s()(e).calendar()
                        })
                    ]
                })
            ]
        });
    }
    renderError() {
        let { application: t } = this.props;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsxs)(r.hzk, {
                    children: [
                        (0, i.jsx)(p.Z, {
                            justify: p.Z.Justify.CENTER,
                            children: (0, i.jsx)('div', { className: N.errorArt })
                        }),
                        (0, i.jsx)('div', {
                            className: N.description,
                            children: y.intl.format(y.t.RAaWyc, { applicationName: t.name })
                        })
                    ]
                }),
                (0, i.jsx)(r.mzw, {
                    children: (0, i.jsxs)(p.Z, {
                        justify: p.Z.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(r.zxk, {
                                className: N.linkButton,
                                size: N.linkButtonSize,
                                look: r.zxk.Looks.LINK,
                                color: r.zxk.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: y.intl.string(y.t['ETE/oK'])
                            }),
                            (0, i.jsxs)(p.Z, {
                                direction: p.Z.Direction.HORIZONTAL,
                                justify: p.Z.Justify.END,
                                children: [
                                    (0, i.jsx)(r.zxk, {
                                        look: r.zxk.Looks.LINK,
                                        color: r.zxk.Colors.PRIMARY,
                                        onClick: () => this.handlePlay(),
                                        className: N.retryButton,
                                        children: y.intl.string(y.t['5911LS'])
                                    }),
                                    (0, i.jsx)(r.zxk, {
                                        onClick: () => this.handlePlay(!1),
                                        children: y.intl.string(y.t['359PbW'])
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
        return (0, i.jsxs)(r.hzk, {
            className: m.marginBottom20,
            children: [
                (0, i.jsx)('div', {
                    className: N.description,
                    children: y.intl.format(y.t.eyXUPz, { applicationName: t.name })
                }),
                this.renderConflictButton(y.intl.string(y.t.AQUmkp), e.remote.timestamp, N.conflictDownloadArt, this.handleChooseDownload),
                (0, i.jsxs)(p.Z, {
                    className: N.choiceWrapper,
                    align: p.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)('div', { className: N.choiceLine }),
                        (0, i.jsx)('div', {
                            className: N.choiceTitle,
                            children: y.intl.string(y.t.WUsA2N)
                        }),
                        (0, i.jsx)('div', { className: N.choiceLine })
                    ]
                }),
                this.renderConflictButton(y.intl.string(y.t.AXVws7), e.next.timestamp, N.conflictUploadArt, this.handleChooseUpload)
            ]
        });
    }
    render() {
        let { cloudSyncState: t, transitionState: e } = this.props,
            n = t.type === C.TzF.CONFLICT ? y.intl.string(y.t.oNbO1d) : y.intl.string(y.t.as4Tgo);
        return (0, i.jsxs)(r.Y0X, {
            transitionState: e,
            className: N.modal,
            'aria-label': n,
            children: [
                (0, i.jsxs)(r.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(r.olH, {
                            className: N.closeButton,
                            onClick: this.onClose
                        }),
                        (0, i.jsx)(r.vwX, {
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
        super(...t),
            (e = this),
            g(this, 'onClose', () => {
                this.props.onClose();
            }),
            g(this, 'handlePlay', function () {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { libraryApplication: i, analyticsParams: l } = e.props;
                e.onClose(),
                    O(i.id, i, {
                        analyticsParams: l,
                        cloudSync: t,
                        cloudSyncForceHash: n
                    });
            }),
            g(this, 'handleChooseDownload', () => {
                let { cloudSyncState: t } = this.props;
                t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
            }),
            g(this, 'handleChooseUpload', () => {
                let { cloudSyncState: t } = this.props;
                t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
            });
    }
}
let T = o.ZP.connectStores([h.Z, u.Z], (t) => {
    let { libraryApplication: e, branchId: n } = t;
    return {
        cloudSyncState: h.Z.getState(e.id, n),
        application: u.Z.getApplication(e.id)
    };
})(A);
async function O(t, e, n) {
    let l = u.Z.getApplication(t);
    if (null == l) return;
    let { cloudSync: a = !0, cloudSyncForceHash: s = null, analyticsParams: o } = n;
    if (a && null != e) {
        let t = e.branchId;
        try {
            await c.Z(e.id, t, s);
        } catch (n) {
            (0, r.h7j)((n) =>
                (0, i.jsx)(T, {
                    libraryApplication: e,
                    analyticsParams: o,
                    branchId: t,
                    ...n
                })
            );
            return;
        }
    }
    return (
        f.default.track(C.rMx.APPLICATION_OPENED, {
            application_id: l.id,
            application_name: l.name,
            type: C.q5t.LAUNCH,
            distributor: null != e ? e.getDistributor() : null,
            ...o
        }),
        d.Z.launch({
            applicationId: l.id,
            branchId: null == e ? void 0 : e.branchId
        })
    );
}
