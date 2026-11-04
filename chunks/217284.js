n.r(t);
var i = n(253400);
n.d(
    t,
    {},
    {
        getKrispModel: function () {
            try {
                return i.Ay.requireModule("discord_krisp").getNcModelFilename();
            } catch (e) {
                return Promise.resolve(null);
            }
        },
        setKrispModelOverride: function (e) {
            try {
                i.Ay.requireModule("discord_krisp").setNcModel(e);
            } catch (e) {}
        },
        setKrispSuppressionLevel: function (e) {
            try {
                i.Ay.requireModule("discord_krisp").setSuppressionLevel?.(e);
            } catch (e) {}
        },
    },
);
