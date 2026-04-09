"use strict";
n.d(e, { default: () => x });
var r = n(627968),
    i = n(64700),
    o = n(284009),
    a = n.n(o),
    s = n(189213),
    l = n(311907),
    c = n(314116),
    d = n(397927),
    u = n(73153),
    f = n(900686),
    p = n(358776),
    h = n(917136),
    m = n(976910),
    S = n(665671),
    g = n(670492),
    w = n(287809),
    y = n(975571),
    C = n(652215),
    A = n(985018),
    E = n(604936);
let v = (t) => {
    let { label: e, text: n, children: i, ...o } = t;
    return (0, r.jsxs)("div", {
        className: E.jx,
        ...o,
        children: [
            (0, r.jsx)(d.Heading, { variant: "heading-md/semibold", children: e }),
            null != n ? (0, r.jsx)(d.Text, { variant: "text-md/normal", className: E.gt, children: n }) : null,
            (0, r.jsx)("div", { children: i }),
        ],
    });
};
class _ extends i.PureComponent {
    handleCloseModal = async (t) => {
        let { onClose: e, hasSeenBackupPrompt: n } = this.props;
        n
            ? await e()
            : await (0, c.A)({
                  title: A.intl.string(A.t.mwVXnI),
                  confirmText: A.intl.string(A.t.MwSEoz),
                  cancelText: A.intl.string(A.t["ETE/oC"]),
                  onConfirm: () => {
                      u.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), e();
                  },
                  children: t,
              });
    };
    renderBackupCodesSection(t) {
        return (0, r.jsx)(v, {
            label: A.intl.string(A.t.qZZUy6),
            text: t,
            children: (0, r.jsx)(f.A, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => u.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, r.jsx)(d.Button, { variant: "active", size: "sm", text: A.intl.string(A.t.qZZUy6) }),
            }),
        });
    }
    handleAddPasskey = () => {
        this.props.onClose(), (0, p.pC)("MFAEnableSuccess") ? (0, S.A)() : h.Mn();
    };
    renderPasskeyCTASection() {
        return m.A.hasCredentials
            ? null
            : (0, r.jsxs)(v, {
                  label: A.intl.string(A.t.xMDCHa),
                  text: A.intl.string(A.t.okgGTu),
                  children: [
                      (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: E.gt,
                          children: A.intl.format(A.t.OeGXVv, {
                              learnMoreLink: y.A.getArticleURL(C.MVz.SETTING_UP_TWO_FACTOR),
                          }),
                      }),
                      (0, r.jsx)(d.Button, {
                          variant: "active",
                          size: "sm",
                          text: A.intl.string(A.t.NIFmCJ),
                          onClick: this.handleAddPasskey,
                      }),
                  ],
              });
    }
    render() {
        let { isTotp: t } = this.props;
        return t ? this.renderTotp() : this.renderWebAuthn();
    }
    renderTotp() {
        let { transitionState: t } = this.props;
        return (0, r.jsxs)(s.Modal, {
            onClose: () => this.handleCloseModal(A.intl.string(A.t.WJFPHJ)),
            transitionState: t,
            title: A.intl.string(A.t.Awk3Gw),
            subtitle: A.intl.format(A.t["/Nhi8R"], {}),
            actions: [],
            children: [
                this.renderPasskeyCTASection(),
                (0, r.jsx)(d.cGx, { className: E.yF }),
                this.renderBackupCodesSection(A.intl.format(A.t.M0Dogh, {})),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: t } = this.props;
        return (0, r.jsx)(s.Modal, {
            onClose: () => this.handleCloseModal(A.intl.string(A.t.aoNIXB)),
            transitionState: t,
            title: A.intl.string(A.t["7wPZln"]),
            subtitle: A.intl.format(A.t["/Nhi8R"], {}),
            actions: [],
            children: this.renderBackupCodesSection(A.intl.format(A.t.p59QLQ, {})),
        });
    }
    getDownloadFileContents = () => {
        let t = this.props.backupCodes
                .map((t) => {
                    let { consumed: e, code: n } = t;
                    return `* ${n.substr(0, 4)}-${n.substr(4)} ${e ? `(${A.intl.string(A.t["ycME+9"])})` : ""}`;
                })
                .join("\r\n"),
            e = A.intl.formatToPlainString(A.t["uYWwh/"], { email: this.props.currentUser.email });
        return `${e}\r
\r
${t}`;
    };
}
let x = l.Ay.connectStores([w.default, g.A], () => {
    let t = w.default.getCurrentUser();
    return (
        a()(null != t, "MFAEnableSuccess: currentUser cannot be undefined"),
        { currentUser: t, backupCodes: g.A.getBackupCodes(), hasSeenBackupPrompt: g.A.hasSeenBackupPrompt }
    );
})(_);
