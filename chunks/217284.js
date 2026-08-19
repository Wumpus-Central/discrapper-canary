"use strict";
n.r(t), n.d(t, { getKrispModel: () => r, setKrispModelOverride: () => s, setKrispSuppressionLevel: () => a });
var i = n(19575);
function r() {
    try {
        return i.Ay.requireModule("discord_krisp").getNcModelFilename();
    } catch (e) {
        return Promise.resolve(null);
    }
}
function a(e) {
    try {
        i.Ay.requireModule("discord_krisp").setSuppressionLevel?.(e);
    } catch (e) {}
}
function s(e) {
    try {
        i.Ay.requireModule("discord_krisp").setNcModel(e);
    } catch (e) {}
}
