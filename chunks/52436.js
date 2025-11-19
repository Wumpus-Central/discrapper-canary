n.d(t, { f: () => i }), n(388685);
var l = n(663042);
let r = {
        query: "",
        sortOrder: "descending",
        selectedGameId: null,
        selectedUserIds: new Set(),
        selectedActivity: null,
        selectedGuildId: null,
        selectedYear: null,
    },
    i = (0, l.U)((e) => {
        var t, n;
        return (
            (t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })({}, r)),
            (n = n =
                {
                    setQuery: (t) => e({ query: t }),
                    setSortOrder: (t) => e({ sortOrder: t }),
                    setSelectedGameId: (t) => e({ selectedGameId: t }),
                    setSelectedUserIds: (t) => e({ selectedUserIds: t }),
                    toggleUserId: (t) =>
                        e((e) => {
                            let n = new Set(e.selectedUserIds);
                            return n.has(t) ? n.delete(t) : n.add(t), { selectedUserIds: n };
                        }),
                    setSelectedActivity: (t) => e({ selectedActivity: t }),
                    setSelectedGuildId: (t) => e({ selectedGuildId: t }),
                    setSelectedYear: (t) => e({ selectedYear: t }),
                    clearFilters: () =>
                        e({
                            selectedUserIds: new Set(),
                            selectedActivity: null,
                            selectedGuildId: null,
                            selectedYear: null,
                        }),
                    resetFilters: () => e(r),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t
        );
    });
