n.d(t, { default: () => A }), n(388685);
var r = n(255367),
    o = n(73800),
    i = n(512722),
    a = n.n(i),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    d = n(570140),
    u = n(816814),
    p = n(23645),
    h = n(600164),
    f = n(454585),
    _ = n(144114),
    S = n(607018),
    m = n(325067),
    b = n(594174),
    E = n(981631),
    y = n(815660),
    M = n(388032),
    g = n(734625);
function C(e, t, n) {
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
function O(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
let x = (e) => {
    var t,
        n,
        { label: o, text: i, children: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["label", "text", "children"]);
    return (0, r.jsxs)(
        h.Z,
        ((t = O({ direction: h.Z.Direction.VERTICAL }, s)),
        (n = n =
            {
                children: [
                    (0, r.jsx)(c.vwX, {
                        tag: "h2",
                        children: o,
                    }),
                    null != i
                        ? (0, r.jsx)(c.Text, {
                              variant: "text-md/normal",
                              className: g.sectionBody,
                              children: i,
                          })
                        : null,
                    (0, r.jsx)(h.Z.Child, {
                        wrap: !0,
                        children: a,
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
class w extends o.PureComponent {
    renderSMSSection() {
        let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(E.xW$.MFA_SMS),
            o = e.hasFlag(E.xW$.PARTNER) || e.hasFlag(E.xW$.STAFF);
        return t
            ? (0, r.jsxs)(x, {
                  label: M.intl.string(M.t.DZQe29),
                  text: M.intl.string(M.t.fspJ4O),
                  children: [
                      (0, r.jsxs)(c.Text, {
                          variant: "text-md/normal",
                          className: g.sectionBody,
                          children: [
                              (0, r.jsx)("strong", {
                                  className: g.phoneNumber,
                                  children: M.intl.format(M.t.PXVoEB, { phoneNumber: e.phone }),
                              }),
                              (0, r.jsx)(l.zx, {
                                  look: l.zx.Looks.LINK,
                                  color: l.zx.Colors.LINK,
                                  size: l.zx.Sizes.MIN,
                                  className: g.linkButton,
                                  onClick: this.handleChangePhoneNumber,
                                  children: M.intl.string(M.t.Ulqq6O),
                              }),
                          ],
                      }),
                      (0, r.jsx)(c.zxk, {
                          variant: "active",
                          size: "sm",
                          text: o
                              ? M.intl.string(M.t.Sq6Q1t)
                              : n
                                ? M.intl.string(M.t.kSbHTE)
                                : M.intl.string(M.t.DZQe29),
                          onClick: this.handleEnableSMS,
                          disabled: n || o,
                      }),
                  ],
              })
            : (0, r.jsx)(x, {
                  label: M.intl.string(M.t.DZQe29),
                  text: M.intl.string(M.t.fspJ4O),
                  children: (0, r.jsx)(c.zxk, {
                      variant: "active",
                      size: "sm",
                      text: o ? M.intl.string(M.t.Sq6Q1t) : M.intl.string(M.t["O5qS/v"]),
                      onClick: this.handleEnableSMS,
                      disabled: o,
                  }),
              });
    }
    renderBackupCodesSection(e) {
        return (0, r.jsx)(x, {
            label: M.intl.string(M.t.qZZUy8),
            text: e,
            children: (0, r.jsx)(p.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => d.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, r.jsx)(c.zxk, {
                    variant: "active",
                    size: "sm",
                    text: M.intl.string(M.t.qZZUy8),
                }),
            }),
        });
    }
    renderHeader(e, t) {
        return (0, r.jsxs)(c.xBx, {
            separator: !1,
            children: [
                (0, r.jsxs)(h.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: "heading-lg/semibold",
                            className: g.header,
                            children: f.Z.parse(e),
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            className: g.subHeader,
                            children: t,
                        }),
                    ],
                }),
                (0, r.jsx)(h.Z.Child, {
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
            header: M.intl.string(M.t.mwVXnJ),
            confirmText: M.intl.string(M.t.MwSEo6),
            cancelText: M.intl.string(M.t["ETE/oK"]),
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
            className: g.modal,
            parentComponent: "MFAEnableSuccess",
            children: [
                this.renderHeader(M.intl.string(M.t["681MPT"]), M.intl.format(M.t.pQioMz, {})),
                (0, r.jsxs)(c.hzk, {
                    className: g.modalInner,
                    children: [
                        this.renderSMSSection(),
                        (0, r.jsx)(c.$i$, { className: g.divider }),
                        this.renderBackupCodesSection(M.intl.format(M.t.M0Dogo, {})),
                    ],
                }),
                t && this.renderConfirmModal(M.intl.string(M.t.WJFPHB)),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(c.Y0X, {
            transitionState: e,
            className: g.modal,
            parentComponent: "MFAEnableSuccess",
            children: [
                this.renderHeader(M.intl.string(M.t.x6ielJ), M.intl.format(M.t.Xb5JGh, {})),
                (0, r.jsx)(c.hzk, {
                    className: g.modalInner,
                    children: this.renderBackupCodesSection(M.intl.format(M.t.p59QLS, {})),
                }),
                t && this.renderConfirmModal(M.intl.string(M.t.aoNIXF)),
            ],
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, c.h7j)((t) => (0, r.jsx)(S.default, O({ reason: _.L.MFA_PHONE_UPDATE }, t, e)), { modalKey: y.M });
    }
    constructor(...e) {
        super(...e),
            C(this, "state", { showConfirmModal: !1 }),
            C(this, "handleCloseModal", () => {
                let { onClose: e, hasSeenBackupPrompt: t } = this.props;
                t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            C(this, "getDownloadFileContents", () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return "* "
                                .concat(n.substr(0, 4), "-")
                                .concat(n.substr(4), " ")
                                .concat(t ? "(".concat(M.intl.string(M.t["ycME+/"]), ")") : "");
                        })
                        .join("\r\n"),
                    t = M.intl.formatToPlainString(M.t.uYWwh4, { email: this.props.currentUser.email });
                return "".concat(t, "\r\n\r\n").concat(e);
            }),
            C(this, "handleChangePhoneNumber", () => {
                this.openPhoneVerificationModal();
            }),
            C(this, "handleEnableSMS", () => {
                let { currentUser: e } = this.props;
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: u.Z.enableSMS }) : u.Z.enableSMS();
            });
    }
}
let A = s.ZP.connectStores([b.default, m.Z], () => {
    let e = b.default.getCurrentUser();
    return (
        a()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"),
        {
            currentUser: e,
            backupCodes: m.Z.getBackupCodes(),
            hasSeenBackupPrompt: m.Z.hasSeenBackupPrompt,
        }
    );
})(w);
