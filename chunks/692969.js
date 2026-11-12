var a = t(60465),
    p = t(459778);
t.d(
    o,
    {},
    {
        A: function (e) {
            let { onOpened: o } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                t = (0, p.Ay)(e),
                { gameId: i } = t;
            return t.shouldOpenGameProfile && null != i
                ? (p) => {
                      (p?.stopPropagation(),
                          p?.preventDefault(),
                          a.default.openGameProfileModal({ ...e, gameId: i, gameProfileModalChecks: t }),
                          o?.());
                  }
                : void 0;
        },
    },
);
