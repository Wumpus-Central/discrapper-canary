"use strict";
n.r(t), n.d(t, { getKrispModel: () => r, setKrispModelOverride: () => a, setKrispSuppressionLevel: () => s });
var i = n(19575);
function r() {
    try {
        return i.Ay.requireModule("discord_krisp").getNcModelFilename();
    } catch (e) {
        return Promise.resolve(null);
    }
}
function s(e) {
    try {
        i.Ay.requireModule("discord_krisp").setSuppressionLevel?.(e);
    } catch (e) {}
}
function a(e) {
    try {
        i.Ay.requireModule("discord_krisp").setNcModel(e);
    } catch (e) {}
}
