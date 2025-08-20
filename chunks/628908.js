n.d(t, { default: () => _ }), n(388685);
var r = n(951288),
    s = n(647438),
    i = n(512722),
    o = n.n(i),
    l = n(442837),
    a = n(755721),
    c = n(481060),
    d = n(570140),
    h = n(816814),
    p = n(23645),
    u = n(600164),
    m = n(454585),
    b = n(144114),
    x = n(607018),
    f = n(325067),
    g = n(594174),
    j = n(981631),
    S = n(815660),
    C = n(388032),
    O = n(505198);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
let M = (e) => {
    var t,
        n,
        { label: s, text: i, children: o } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        s = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            }
            return s;
        })(e, ["label", "text", "children"]);
    return (0, r.jsxs)(
        u.Z,
        ((t = P({ direction: u.Z.Direction.VERTICAL }, l)),
        (n = n =
            {
                children: [
                    (0, r.jsx)(c.vwX, {
                        tag: "h2",
                        children: s,
                    }),
                    null != i
                        ? (0, r.jsx)(c.Text, {
                              variant: "text-md/normal",
                              className: O.sectionBody,
                              children: i,
                          })
                        : null,
                    (0, r.jsx)(u.Z.Child, {
                        wrap: !0,
                        children: o,
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
};
class k extends s.PureComponent {
    renderSMSSection() {
        let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(j.xW$.MFA_SMS),
            s = e.hasFlag(j.xW$.PARTNER) || e.hasFlag(j.xW$.STAFF);
        return t
            ? (0, r.jsxs)(M, {
                  label: C.intl.string(C.t.DZQe29),
                  text: C.intl.string(C.t.fspJ4O),
                  children: [
                      (0, r.jsxs)(c.Text, {
                          variant: "text-md/normal",
                          className: O.sectionBody,
                          children: [
                              (0, r.jsx)("strong", {
                                  className: O.phoneNumber,
                                  children: C.intl.format(C.t.PXVoEB, { phoneNumber: e.phone }),
                              }),
                              (0, r.jsx)(a.zx, {
                                  look: a.zx.Looks.LINK,
                                  color: a.zx.Colors.LINK,
                                  size: a.zx.Sizes.MIN,
                                  className: O.linkButton,
                                  onClick: this.handleChangePhoneNumber,
                                  children: C.intl.string(C.t.Ulqq6O),
                              }),
                          ],
                      }),
                      (0, r.jsx)(c.zxk, {
                          variant: "active",
                          size: "sm",
                          text: s
                              ? C.intl.string(C.t.Sq6Q1t)
                              : n
                                ? C.intl.string(C.t.kSbHTE)
                                : C.intl.string(C.t.DZQe29),
                          onClick: this.handleEnableSMS,
                          disabled: n || s,
                      }),
                  ],
              })
            : (0, r.jsx)(M, {
                  label: C.intl.string(C.t.DZQe29),
                  text: C.intl.string(C.t.fspJ4O),
                  children: (0, r.jsx)(c.zxk, {
                      variant: "active",
                      size: "sm",
                      text: s ? C.intl.string(C.t.Sq6Q1t) : C.intl.string(C.t["O5qS/v"]),
                      onClick: this.handleEnableSMS,
                      disabled: s,
                  }),
              });
    }
    renderBackupCodesSection(e) {
        return (0, r.jsx)(M, {
            label: C.intl.string(C.t.qZZUy8),
            text: e,
            children: (0, r.jsx)(p.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => d.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, r.jsx)(c.zxk, {
                    variant: "active",
                    size: "sm",
                    text: C.intl.string(C.t.qZZUy8),
                }),
            }),
        });
    }
    renderHeader(e, t) {
        return (0, r.jsxs)(c.xBx, {
            separator: !1,
            children: [
                (0, r.jsxs)(u.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: "heading-lg/semibold",
                            className: O.header,
                            children: m.Z.parse(e),
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            className: O.subHeader,
                            children: t,
                        }),
                    ],
                }),
                (0, r.jsx)(u.Z.Child, {
                    grow: 0,
                    children: (0, r.jsx)(c.olH, { onClick: this.handleCloseModal }),
                }),
            ],
        });
    }
    renderConfirmModal(e) {
        let { onClose: t } = this.props;
        return (0, r.jsx)(c.sYh, {
            dismissable: !0,
            header: C.intl.string(C.t.mwVXnJ),
            confirmText: C.intl.string(C.t.MwSEo6),
            cancelText: C.intl.string(C.t["ETE/oK"]),
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
                d.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), t();
            },
            children: (0, r.jsx)(c.Text, {
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
        return (0, r.jsxs)(c.Y0X, {
            transitionState: e,
            className: O.modal,
            parentComponent: "MFAEnableSuccess",
            children: [
                this.renderHeader(C.intl.string(C.t["681MPT"]), C.intl.format(C.t.pQioMz, {})),
                (0, r.jsxs)(c.hzk, {
                    className: O.modalInner,
                    children: [
                        this.renderSMSSection(),
                        (0, r.jsx)(c.$i$, { className: O.divider }),
                        this.renderBackupCodesSection(C.intl.format(C.t.M0Dogo, {})),
                    ],
                }),
                t && this.renderConfirmModal(C.intl.string(C.t.WJFPHB)),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(c.Y0X, {
            transitionState: e,
            className: O.modal,
            parentComponent: "MFAEnableSuccess",
            children: [
                this.renderHeader(C.intl.string(C.t.x6ielJ), C.intl.format(C.t.Xb5JGh, {})),
                (0, r.jsx)(c.hzk, {
                    className: O.modalInner,
                    children: this.renderBackupCodesSection(C.intl.format(C.t.p59QLS, {})),
                }),
                t && this.renderConfirmModal(C.intl.string(C.t.aoNIXF)),
            ],
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, c.h7j)((t) => (0, r.jsx)(x.default, P({ reason: b.L.MFA_PHONE_UPDATE }, t, e)), { modalKey: S.M });
    }
    constructor(...e) {
        super(...e),
            y(this, "state", { showConfirmModal: !1 }),
            y(this, "handleCloseModal", () => {
                let { onClose: e, hasSeenBackupPrompt: t } = this.props;
                t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            y(this, "getDownloadFileContents", () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return "* "
                                .concat(n.substr(0, 4), "-")
                                .concat(n.substr(4), " ")
                                .concat(t ? "(".concat(C.intl.string(C.t["ycME+/"]), ")") : "");
                        })
                        .join("\r\n"),
                    t = C.intl.formatToPlainString(C.t.uYWwh4, { email: this.props.currentUser.email });
                return "".concat(t, "\r\n\r\n").concat(e);
            }),
            y(this, "handleChangePhoneNumber", () => {
                this.openPhoneVerificationModal();
            }),
            y(this, "handleEnableSMS", () => {
                let { currentUser: e } = this.props;
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: h.Z.enableSMS }) : h.Z.enableSMS();
            });
    }
}
let _ = l.ZP.connectStores([g.default, f.Z], () => {
    let e = g.default.getCurrentUser();
    return (
        o()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"),
        {
            currentUser: e,
            backupCodes: f.Z.getBackupCodes(),
            hasSeenBackupPrompt: f.Z.hasSeenBackupPrompt,
        }
    );
})(k);
