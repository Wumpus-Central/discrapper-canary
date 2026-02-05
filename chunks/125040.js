n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(421380),
    r = n(397927),
    a = n(631670),
    l = n(985018);
function o(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(r.MJ3, {
        dismissable: !0,
        header: l.intl.string(l.t.UNGZDI),
        confirmText: l.intl.string(l.t.BddRzS),
        confirmButtonColor: s.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, i.jsx)(r.Text, { variant: "text-md/normal", children: l.intl.string(l.t.alpAUm) }),
    });
}
function c(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(r.MJ3, {
        dismissable: !0,
        header: l.intl.string(l.t.I5UrbV),
        confirmText: l.intl.string(l.t.BddRzS),
        confirmButtonColor: s.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, i.jsx)(r.Text, { variant: "text-md/normal", children: l.intl.string(l.t.UyVVan) }),
    });
}
function d(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(r.MJ3, {
        dismissable: !0,
        header: l.intl.string(l.t["8lQ2rR"]),
        confirmText: l.intl.string(l.t["8lQ2rR"]),
        cancelText: l.intl.string(l.t["ETE/oC"]),
        onCancel: t,
        onConfirm: () => (0, a.U_)("", !0).then(t),
        children: (0, i.jsx)(r.Text, { variant: "text-md/normal", children: l.intl.string(l.t.FB4H1D) }),
    });
}
function u(e) {
    let { onClose: t, errorMessage: n } = e;
    return (0, i.jsx)(r.MJ3, {
        dismissable: !0,
        header: l.intl.string(l.t.LX0nT8),
        confirmText: l.intl.string(l.t.BddRzS),
        confirmButtonColor: s.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, i.jsx)(r.Text, { variant: "text-md/normal", children: n }),
    });
}
function _(e) {
    let {
        shouldRenderOwnedTeamsModal: t,
        shouldRenderOwnedGuildsModal: n,
        shouldRenderDeleteAccountConfirmModal: s,
        shouldRenderDisableAccountErrorModal: r,
        disableAccountErrorMessage: a,
        onOwnedTeamsWarningModalClose: l,
        onOwnedGuildsWarningModalClose: _,
        onDeleteAccountConfirmModalClose: m,
        onDisableAccountErrorModalClose: A,
    } = e;
    return t
        ? (0, i.jsx)(o, { onClose: l })
        : n
          ? (0, i.jsx)(c, { onClose: _ })
          : s
            ? (0, i.jsx)(d, { onClose: m })
            : r
              ? (0, i.jsx)(u, { onClose: A, errorMessage: a })
              : null;
}
