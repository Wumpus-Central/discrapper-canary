n.d(e, { default: () => f });
var s = n(627968),
    i = n(64700),
    r = n(284009),
    l = n.n(r),
    a = n(189213),
    o = n(17928),
    d = n(314116),
    c = n(534514),
    h = n(834730),
    p = n(821609),
    u = n(404778),
    C = n(228366),
    m = n(900686),
    x = n(358776),
    g = n(917136),
    A = n(976910),
    k = n(665671),
    M = n(670492),
    b = n(287809),
    P = n(975571),
    S = n(652215),
    T = n(985018),
    j = n(893709);
let E = (t) => {
    let { label: e, text: n, children: i, ...r } = t;
    return (0, s.jsxs)("div", {
        className: j.jx,
        ...r,
        children: [
            (0, s.jsx)(c.D, { variant: "heading-md/semibold", children: e }),
            null != n ? (0, s.jsx)(h.E, { variant: "text-md/normal", className: j.gt, children: n }) : null,
            (0, s.jsx)("div", { children: i }),
        ],
    });
};
class _ extends i.PureComponent {
    handleCloseModal = async (t) => {
        let { onClose: e, hasSeenBackupPrompt: n } = this.props;
        n
            ? await e()
            : await (0, d.A)({
                  title: T.intl.string(T.t.mwVXnI),
                  confirmText: T.intl.string(T.t.MwSEoz),
                  cancelText: T.intl.string(T.t["ETE/oC"]),
                  onConfirm: () => {
                      C.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), e();
                  },
                  children: t,
              });
    };
    renderBackupCodesSection(t) {
        return (0, s.jsx)(E, {
            label: T.intl.string(T.t.qZZUy6),
            text: t,
            children: (0, s.jsx)(m.A, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => C.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, s.jsx)(p.$, { variant: "active", size: "sm", text: T.intl.string(T.t.qZZUy6) }),
            }),
        });
    }
    handleAddPasskey = () => {
        this.props.onClose(), (0, x.pC)("MFAEnableSuccess") ? (0, k.A)() : g.Mn();
    };
    renderPasskeyCTASection() {
        return A.A.hasCredentials
            ? null
            : (0, s.jsxs)(E, {
                  label: T.intl.string(T.t.xMDCHa),
                  text: T.intl.string(T.t.okgGTu),
                  children: [
                      (0, s.jsx)(h.E, {
                          variant: "text-md/normal",
                          className: j.gt,
                          children: T.intl.format(T.t.OeGXVv, {
                              learnMoreLink: P.A.getArticleURL(S.MVz.SETTING_UP_TWO_FACTOR),
                          }),
                      }),
                      (0, s.jsx)(p.$, {
                          variant: "active",
                          size: "sm",
                          text: T.intl.string(T.t.NIFmCJ),
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
        return (0, s.jsxs)(a.Modal, {
            onClose: () => this.handleCloseModal(T.intl.string(T.t.WJFPHJ)),
            transitionState: t,
            title: T.intl.string(T.t.Awk3Gw),
            subtitle: T.intl.format(T.t["/Nhi8R"], {}),
            actions: [],
            children: [
                this.renderPasskeyCTASection(),
                (0, s.jsx)(u.c, { className: j.yF }),
                this.renderBackupCodesSection(T.intl.format(T.t.M0Dogh, {})),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: t } = this.props;
        return (0, s.jsx)(a.Modal, {
            onClose: () => this.handleCloseModal(T.intl.string(T.t.aoNIXB)),
            transitionState: t,
            title: T.intl.string(T.t["7wPZln"]),
            subtitle: T.intl.format(T.t["/Nhi8R"], {}),
            actions: [],
            children: this.renderBackupCodesSection(T.intl.format(T.t.p59QLQ, {})),
        });
    }
    getDownloadFileContents = () => {
        let t = this.props.backupCodes
                .map((t) => {
                    let { consumed: e, code: n } = t;
                    return `* ${n.substr(0, 4)}-${n.substr(4)} ${e ? `(${T.intl.string(T.t["ycME+9"])})` : ""}`;
                })
                .join("\r\n"),
            e = T.intl.formatToPlainString(T.t["uYWwh/"], { email: this.props.currentUser.email });
        return `${e}\r
\r
${t}`;
    };
}
let f = o.Ay.connectStores([b.default, M.A], () => {
    let t = b.default.getCurrentUser();
    return (
        l()(null != t, "MFAEnableSuccess: currentUser cannot be undefined"),
        { currentUser: t, backupCodes: M.A.getBackupCodes(), hasSeenBackupPrompt: M.A.hasSeenBackupPrompt }
    );
})(_);
