var i = n(73153),
    r = n(793943),
    a = n(973654);
function s() {
    ((0, r.Jp)(), (0, a.XG)(), i.h.dispatch({ type: "CLIENT_THEMES_EDITOR_CLOSE" }));
}
n.d(
    t,
    {},
    {
        DS: s,
        by: function () {
            r.fy.getState().activePanel === r.HP.CLIENT_THEMES && s();
        },
        cO: function () {
            r.fy.getState().activePanel === r.HP.CUSTOM_THEME && (0, r.Jp)();
        },
    },
);
