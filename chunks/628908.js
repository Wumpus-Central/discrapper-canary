r.d(t, { default: () => y }), r(388685);
var n = r(951288),
    s = r(647438),
    o = r(512722),
    i = r.n(o),
    a = r(442837),
    l = r(481060),
    c = r(570140),
    d = r(23645),
    h = r(600164),
    p = r(454585),
    u = r(325067),
    m = r(594174),
    f = r(388032),
    b = r(255063);
function x(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let j = (e) => {
    var t,
        r,
        { label: s, text: o, children: i } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        s = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
            }
            return s;
        })(e, ["label", "text", "children"]);
    return (0, n.jsxs)(
        h.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        x(e, t, r[t]);
                    });
            }
            return e;
        })({ direction: h.Z.Direction.VERTICAL }, a)),
        (r = r =
            {
                children: [
                    (0, n.jsx)(l.vwX, {
                        tag: "h2",
                        children: s,
                    }),
                    null != o
                        ? (0, n.jsx)(l.Text, {
                              variant: "text-md/normal",
                              className: b.sectionBody,
                              children: o,
                          })
                        : null,
                    (0, n.jsx)(h.Z.Child, {
                        wrap: !0,
                        children: i,
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
};
class g extends s.PureComponent {
    renderBackupCodesSection(e) {
        return (0, n.jsx)(j, {
            label: f.intl.string(f.t.qZZUy8),
            text: e,
            children: (0, n.jsx)(d.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => c.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, n.jsx)(l.zxk, {
                    variant: "active",
                    size: "sm",
                    text: f.intl.string(f.t.qZZUy8),
                }),
            }),
        });
    }
    renderHeader(e, t) {
        return (0, n.jsxs)(l.xBx, {
            separator: !1,
            children: [
                (0, n.jsxs)(h.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, n.jsx)(l.X6q, {
                            variant: "heading-lg/semibold",
                            className: b.header,
                            children: p.Z.parse(e),
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            className: b.subHeader,
                            children: t,
                        }),
                    ],
                }),
                (0, n.jsx)(h.Z.Child, {
                    grow: 0,
                    children: (0, n.jsx)(l.olH, { onClick: this.handleCloseModal }),
                }),
            ],
        });
    }
    renderConfirmModal(e) {
        let { onClose: t } = this.props;
        return (0, n.jsx)(l.sYh, {
            dismissable: !0,
            header: f.intl.string(f.t.mwVXnJ),
            confirmText: f.intl.string(f.t.MwSEo6),
            cancelText: f.intl.string(f.t["ETE/oK"]),
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
                c.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), t();
            },
            children: (0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: e,
            }),
        });
    }
    render() {
        let { isTotp: e } = this.props;
        return e ? this.renderTotp() : this.renderWebAuthn();
    }
    renderTotp() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, n.jsxs)(l.Y0X, {
            transitionState: e,
            className: b.modal,
            parentComponent: "MFAEnableSuccess",
            children: [
                this.renderHeader(f.intl.string(f.t["681MPT"]), f.intl.format(f.t["/Nhi8f"], {})),
                (0, n.jsx)(l.hzk, {
                    className: b.modalInner,
                    children: this.renderBackupCodesSection(f.intl.format(f.t.M0Dogo, {})),
                }),
                t && this.renderConfirmModal(f.intl.string(f.t.WJFPHB)),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, n.jsxs)(l.Y0X, {
            transitionState: e,
            className: b.modal,
            parentComponent: "MFAEnableSuccess",
            children: [
                this.renderHeader(f.intl.string(f.t.x6ielJ), f.intl.format(f.t["/Nhi8f"], {})),
                (0, n.jsx)(l.hzk, {
                    className: b.modalInner,
                    children: this.renderBackupCodesSection(f.intl.format(f.t.p59QLS, {})),
                }),
                t && this.renderConfirmModal(f.intl.string(f.t.aoNIXF)),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "state", { showConfirmModal: !1 }),
            x(this, "handleCloseModal", () => {
                let { onClose: e, hasSeenBackupPrompt: t } = this.props;
                t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            x(this, "getDownloadFileContents", () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: r } = e;
                            return "* "
                                .concat(r.substr(0, 4), "-")
                                .concat(r.substr(4), " ")
                                .concat(t ? "(".concat(f.intl.string(f.t["ycME+/"]), ")") : "");
                        })
                        .join("\r\n"),
                    t = f.intl.formatToPlainString(f.t.uYWwh4, { email: this.props.currentUser.email });
                return "".concat(t, "\r\n\r\n").concat(e);
            });
    }
}
let y = a.ZP.connectStores([m.default, u.Z], () => {
    let e = m.default.getCurrentUser();
    return (
        i()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"),
        {
            currentUser: e,
            backupCodes: u.Z.getBackupCodes(),
            hasSeenBackupPrompt: u.Z.hasSeenBackupPrompt,
        }
    );
})(g);
