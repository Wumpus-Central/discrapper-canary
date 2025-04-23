n.d(t, { Z: () => o });
var i = n(544891),
    r = n(681678),
    l = n(981631),
    a = n(484710);
let o = {
    reportMessageToMods: async (e, t, n) =>
        await i.tn
            .post({
                url: l.ANM.REPORT_TO_MOD(e, t),
                rejectWithError: !1,
                body: { report_reason: n }
            })
            .then(() => {
                r.Z.showSuccessToast(a.w.REPORT_TO_MOD_SUCCESS);
            })
            .catch(() => {
                r.Z.showFailedToast(a.w.GENERIC_ERROR);
            })
};
