let i = null;
n.d(
    t,
    {},
    {
        I_: function (e) {
            i = e;
        },
        NC: ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"],
        Sf: function () {
            return i;
        },
        xz: function (e) {
            i === e && (i = null);
        },
    },
);
