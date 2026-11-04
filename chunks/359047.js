var l = i(477900);
i(582128);
var t = i(192308),
    o = i(477782),
    c = i(588190),
    r = i(770666),
    a = i(823508),
    s = i(792996);
i.d(
    n,
    {},
    {
        A: function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                d = (0, r.A)(e),
                u = (0, a.A)();
            return d
                ? (0, l.jsx)(o.Dr, {
                      id: "create-event",
                      label: s.intl.string(s.t["60lJ0C"]),
                      icon: n ? c.U : void 0,
                      leadingAccessory: n ? { type: "icon", icon: c.U } : void 0,
                      action: function () {
                          (0, t.mM)(async () => {
                              let { default: n } = await Promise.all([
                                  i.e(670870),
                                  i.e(684231),
                                  i.e(570690),
                                  i.e(886631),
                                  i.e(884841),
                                  i.e(998835),
                                  i.e(468555),
                                  i.e(862179),
                                  i.e(191601),
                                  i.e(936875),
                                  i.e(370017),
                                  i.e(881717),
                                  i.e(711162),
                                  i.e(998392),
                                  i.e(948054),
                                  i.e(147626),
                                  i.e(159957),
                                  i.e(728136),
                                  i.e(680029),
                                  i.e(409391),
                                  i.e(810262),
                                  i.e(756684),
                                  i.e(908170),
                                  i.e(449347),
                                  i.e(769014),
                                  i.e(853934),
                                  i.e(402076),
                                  i.e(469647),
                                  i.e(670089),
                                  i.e(508425),
                                  i.e(454450),
                                  i.e(664743),
                                  i.e(426226),
                              ]).then(i.bind(i, 688218));
                              return (i) => (0, l.jsx)(n, { ...i, guildId: e });
                          }, u);
                      },
                  })
                : null;
        },
    },
);
