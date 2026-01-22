n.d(t, {
    A: () => s,
});
var r = n(311907),
    i = n(773669),
    a = n(985018);

function s(e) {
    let t = (0, r.bG)([i.default], () => i.default.locale.startsWith("en-"));
    return ":pizza:" === e && t
        ? a.intl.formatToPlainString(a.t["1knDPI"], {
              emojiName: e,
          })
        : e;
}
