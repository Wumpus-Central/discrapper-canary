var i = n(435558);
function r(e) {
    return e.__DISCORD_WINDOW_ID;
}
n.d(
    t,
    {},
    {
        Q2: r,
        Xg: function () {
            return r(window);
        },
        rw: function (e) {
            let t = (0, i.uniqueId)("window-");
            return ((e.__DISCORD_WINDOW_ID = t), t);
        },
    },
);
