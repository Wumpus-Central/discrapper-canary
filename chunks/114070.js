n.d(t, { _S: () => d, b5: () => c, q6: () => o });
var i = n(155718);
let r = (0, n(945810).mj)({
    name: "2026-09-build-a-bear",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var a = n(532294),
    s = n(922704),
    l = n(375708);
function o(e) {
    return !(function (e) {
        let { enabled: t } = r.getConfig({ location: e });
        return t;
    })("transformCheckpoint2026CardComponent") || null == e.character
        ? null
        : {
              version: e.version,
              character: {
                  base: e.character.base,
                  shoes: e.character.shoes,
                  outfit: e.character.outfit,
                  face: e.character.face,
                  hat: e.character.hat,
                  wearable: e.character.wearable,
                  aura: e.character.aura,
              },
          };
}
function d(e) {
    let t = e.components[0];
    return null == t || t.type !== i.I5.CHECKPOINT_CARD ? null : t.checkpointData;
}
function c(e) {
    switch (e.version) {
        case a.wk.V2025:
            return l.intl.string(s.default.goiR2u);
        case a.wk.V2026:
        default:
            return null;
    }
}
