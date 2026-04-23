"use strict";
n.d(e, { default: () => O });
var r = n(627968),
    i = n(64700),
    o = n(284009),
    a = n.n(o),
    s = n(189213),
    l = n(17928),
    c = n(314116),
    d = n(534514),
    u = n(834730),
    f = n(821609),
    p = n(404778),
    h = n(228366),
    g = n(900686),
    m = n(358776),
    S = n(917136),
    C = n(976910),
    y = n(665671),
    w = n(670492),
    A = n(287809),
    E = n(975571),
    v = n(652215),
    _ = n(985018),
    b = n(893709);
let N = (t) => {
    let { label: e, text: n, children: i, ...o } = t;
    return (0, r.jsxs)("div", {
        className: b.jx,
        ...o,
        children: [
            (0, r.jsx)(d.D, { variant: "heading-md/semibold", children: e }),
            null != n ? (0, r.jsx)(u.E, { variant: "text-md/normal", className: b.gt, children: n }) : null,
            (0, r.jsx)("div", { children: i }),
        ],
    });
};
class x extends i.PureComponent {
    handleCloseModal = async (t) => {
        let { onClose: e, hasSeenBackupPrompt: n } = this.props;
        n
            ? await e()
            : await (0, c.A)({
                  title: _.intl.string(_.t.mwVXnI),
                  confirmText: _.intl.string(_.t.MwSEoz),
                  cancelText: _.intl.string(_.t["ETE/oC"]),
                  onConfirm: () => {
                      h.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), e();
                  },
                  children: t,
              });
    };
    renderBackupCodesSection(t) {
        return (0, r.jsx)(N, {
            label: _.intl.string(_.t.qZZUy6),
            text: t,
            children: (0, r.jsx)(g.A, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => h.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, r.jsx)(f.$, { variant: "active", size: "sm", text: _.intl.string(_.t.qZZUy6) }),
            }),
        });
    }
    handleAddPasskey = () => {
        this.props.onClose(), (0, m.pC)("MFAEnableSuccess") ? (0, y.A)() : S.Mn();
    };
    renderPasskeyCTASection() {
        return C.A.hasCredentials
            ? null
            : (0, r.jsxs)(N, {
                  label: _.intl.string(_.t.xMDCHa),
                  text: _.intl.string(_.t.okgGTu),
                  children: [
                      (0, r.jsx)(u.E, {
                          variant: "text-md/normal",
                          className: b.gt,
                          children: _.intl.format(_.t.OeGXVv, {
                              learnMoreLink: E.A.getArticleURL(v.MVz.SETTING_UP_TWO_FACTOR),
                          }),
                      }),
                      (0, r.jsx)(f.$, {
                          variant: "active",
                          size: "sm",
                          text: _.intl.string(_.t.NIFmCJ),
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
            onClose: () => this.handleCloseModal(_.intl.string(_.t.WJFPHJ)),
            transitionState: t,
            title: _.intl.string(_.t.Awk3Gw),
            subtitle: _.intl.format(_.t["/Nhi8R"], {}),
            actions: [],
            children: [
                this.renderPasskeyCTASection(),
                (0, r.jsx)(p.c, { className: b.yF }),
                this.renderBackupCodesSection(_.intl.format(_.t.M0Dogh, {})),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: t } = this.props;
        return (0, r.jsx)(s.Modal, {
            onClose: () => this.handleCloseModal(_.intl.string(_.t.aoNIXB)),
            transitionState: t,
            title: _.intl.string(_.t["7wPZln"]),
            subtitle: _.intl.format(_.t["/Nhi8R"], {}),
            actions: [],
            children: this.renderBackupCodesSection(_.intl.format(_.t.p59QLQ, {})),
        });
    }
    getDownloadFileContents = () => {
        let t = this.props.backupCodes
                .map((t) => {
                    let { consumed: e, code: n } = t;
                    return `* ${n.substr(0, 4)}-${n.substr(4)} ${e ? `(${_.intl.string(_.t["ycME+9"])})` : ""}`;
                })
                .join("\r\n"),
            e = _.intl.formatToPlainString(_.t["uYWwh/"], { email: this.props.currentUser.email });
        return `${e}\r
\r
${t}`;
    };
}
let O = l.Ay.connectStores([A.default, w.A], () => {
    let t = A.default.getCurrentUser();
    return (
        a()(null != t, "MFAEnableSuccess: currentUser cannot be undefined"),
        { currentUser: t, backupCodes: w.A.getBackupCodes(), hasSeenBackupPrompt: w.A.hasSeenBackupPrompt }
    );
})(x);
