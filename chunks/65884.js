n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(421380),
    l = n(397927),
    a = n(631670),
    r = n(985018);
function o(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(l.MJ3, {
        dismissable: !0,
        header: r.intl.string(r.t.UNGZDI),
        confirmText: r.intl.string(r.t.BddRzS),
        confirmButtonColor: s.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, i.jsx)(l.Text, { variant: "text-md/normal", children: r.intl.string(r.t.alpAUm) }),
    });
}
function d(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(l.MJ3, {
        dismissable: !0,
        header: r.intl.string(r.t.I5UrbV),
        confirmText: r.intl.string(r.t.BddRzS),
        confirmButtonColor: s.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, i.jsx)(l.Text, { variant: "text-md/normal", children: r.intl.string(r.t.UyVVan) }),
    });
}
function c(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(l.MJ3, {
        dismissable: !0,
        header: r.intl.string(r.t["8lQ2rR"]),
        confirmText: r.intl.string(r.t["8lQ2rR"]),
        cancelText: r.intl.string(r.t["ETE/oC"]),
        onCancel: t,
        onConfirm: () => (0, a.U_)("", !0).then(t),
        children: (0, i.jsx)(l.Text, { variant: "text-md/normal", children: r.intl.string(r.t.FB4H1D) }),
    });
}
function u(e) {
    let { onClose: t, errorMessage: n } = e;
    return (0, i.jsx)(l.MJ3, {
        dismissable: !0,
        header: r.intl.string(r.t.LX0nT8),
        confirmText: r.intl.string(r.t.BddRzS),
        confirmButtonColor: s.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, i.jsx)(l.Text, { variant: "text-md/normal", children: n }),
    });
}
function _(e) {
    let {
        shouldRenderOwnedTeamsModal: t,
        shouldRenderOwnedGuildsModal: n,
        shouldRenderDeleteAccountConfirmModal: s,
        shouldRenderDisableAccountErrorModal: l,
        disableAccountErrorMessage: a,
        onOwnedTeamsWarningModalClose: r,
        onOwnedGuildsWarningModalClose: _,
        onDeleteAccountConfirmModalClose: m,
        onDisableAccountErrorModalClose: g,
    } = e;
    return t
        ? (0, i.jsx)(o, { onClose: r })
        : n
          ? (0, i.jsx)(d, { onClose: _ })
          : s
            ? (0, i.jsx)(c, { onClose: m })
            : l
              ? (0, i.jsx)(u, { onClose: g, errorMessage: a })
              : null;
}
