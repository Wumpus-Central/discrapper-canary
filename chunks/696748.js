e.d(n, {
    a: function () {
        return O;
    }
}),
    e(411104),
    e(47120);
var i = e(200651),
    l = e(192379),
    o = e(913527),
    r = e.n(o),
    a = e(442837),
    s = e(481060),
    c = e(372123),
    d = e(224706),
    u = e(812206),
    p = e(600164),
    h = e(293245),
    f = e(626135),
    C = e(981631),
    y = e(388032),
    N = e(678099),
    m = e(232186);
function g(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = e),
        t
    );
}
class T extends l.PureComponent {
    renderConflictButton(t, n, e, l) {
        return (0, i.jsxs)(s.Button, {
            className: N.conflictButton,
            innerClassName: N.conflictButtonInner,
            onClick: l,
            children: [
                (0, i.jsx)('div', { className: e }),
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
                            children: r()(n).calendar()
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
                (0, i.jsxs)(s.ModalContent, {
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
                (0, i.jsx)(s.ModalFooter, {
                    children: (0, i.jsxs)(p.Z, {
                        justify: p.Z.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(s.Button, {
                                className: N.linkButton,
                                size: N.linkButtonSize,
                                look: s.Button.Looks.LINK,
                                color: s.Button.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: y.intl.string(y.t['ETE/oK'])
                            }),
                            (0, i.jsxs)(p.Z, {
                                direction: p.Z.Direction.HORIZONTAL,
                                justify: p.Z.Justify.END,
                                children: [
                                    (0, i.jsx)(s.Button, {
                                        look: s.Button.Looks.LINK,
                                        color: s.Button.Colors.PRIMARY,
                                        onClick: () => this.handlePlay(),
                                        className: N.retryButton,
                                        children: y.intl.string(y.t['5911LS'])
                                    }),
                                    (0, i.jsx)(s.Button, {
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
        let { application: t, cloudSyncState: n } = this.props;
        if (n.type !== C.TzF.CONFLICT) throw Error('Cannot render conflict for non conflict type');
        return (0, i.jsxs)(s.ModalContent, {
            className: m.marginBottom20,
            children: [
                (0, i.jsx)('div', {
                    className: N.description,
                    children: y.intl.format(y.t.eyXUPz, { applicationName: t.name })
                }),
                this.renderConflictButton(y.intl.string(y.t.AQUmkp), n.remote.timestamp, N.conflictDownloadArt, this.handleChooseDownload),
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
                this.renderConflictButton(y.intl.string(y.t.AXVws7), n.next.timestamp, N.conflictUploadArt, this.handleChooseUpload)
            ]
        });
    }
    render() {
        let { cloudSyncState: t, transitionState: n } = this.props,
            e = t.type === C.TzF.CONFLICT ? y.intl.string(y.t.oNbO1d) : y.intl.string(y.t.as4Tgo);
        return (0, i.jsxs)(s.ModalRoot, {
            transitionState: n,
            className: N.modal,
            'aria-label': e,
            children: [
                (0, i.jsxs)(s.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.ModalCloseButton, {
                            className: N.closeButton,
                            onClick: this.onClose
                        }),
                        (0, i.jsx)(s.FormTitle, {
                            tag: 'h2',
                            className: m.marginReset,
                            children: e
                        })
                    ]
                }),
                t.type === C.TzF.CONFLICT ? this.renderConflict() : this.renderError()
            ]
        });
    }
    constructor(...t) {
        var n;
        super(...t),
            (n = this),
            g(this, 'onClose', () => {
                this.props.onClose();
            }),
            g(this, 'handlePlay', function () {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { libraryApplication: i, analyticsParams: l } = n.props;
                n.onClose(),
                    O(i.id, i, {
                        analyticsParams: l,
                        cloudSync: t,
                        cloudSyncForceHash: e
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
let A = a.ZP.connectStores([h.Z, u.Z], (t) => {
    let { libraryApplication: n, branchId: e } = t;
    return {
        cloudSyncState: h.Z.getState(n.id, e),
        application: u.Z.getApplication(n.id)
    };
})(T);
async function O(t, n, e) {
    let l = u.Z.getApplication(t);
    if (null == l) return;
    let { cloudSync: o = !0, cloudSyncForceHash: r = null, analyticsParams: a } = e;
    if (o && null != n) {
        let t = n.branchId;
        try {
            await c.Z(n.id, t, r);
        } catch (e) {
            (0, s.openModal)((e) =>
                (0, i.jsx)(A, {
                    libraryApplication: n,
                    analyticsParams: a,
                    branchId: t,
                    ...e
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
            distributor: null != n ? n.getDistributor() : null,
            ...a
        }),
        d.Z.launch({
            applicationId: l.id,
            branchId: null == n ? void 0 : n.branchId
        })
    );
}
