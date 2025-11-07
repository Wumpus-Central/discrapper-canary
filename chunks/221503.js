n.d(t, { Q: () => a });
var r = n(668781),
    i = n(388032);
function a(e) {
    let { onConfirm: t } = e;
    return r.Z.show({
        title: i.intl.string(i.t.rWQr9U),
        body: i.intl.string(i.t["7Aa3S7"]),
        confirmText: i.intl.string(i.t["/k52hw"]),
        confirmVariant: "critical-primary",
        cancelText: i.intl.string(i.t["4nkxA+"]),
        onConfirm: t,
        onCancel: () => {
            r.Z.close();
        },
    });
}
