"use strict";
n.r(t), n.d(t, { getKrispModel: () => i, setKrispModelOverride: () => a, setKrispSuppressionLevel: () => s });
var r = n(837921);
function i() {
    try {
        return r.Ay.requireModule("discord_krisp").getNcModelFilename();
    } catch (e) {
        return Promise.resolve(null);
    }
}
function s(e) {
    try {
        r.Ay.requireModule("discord_krisp").setSuppressionLevel?.(e);
    } catch (e) {}
}
function a(e) {
    try {
        r.Ay.requireModule("discord_krisp").setNcModel(e);
    } catch (e) {}
}
