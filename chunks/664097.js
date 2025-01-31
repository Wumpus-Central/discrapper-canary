i.d(t, { o: () => d });
var l = i(192379),
    n = i(442837),
    a = i(115130),
    r = i(701488);
let d = () => {
    let { isEnabled: e, lastUsedObject: t } = (0, n.cj)(
            [a.Z],
            () => ({
                isEnabled: a.Z.getIsEnabled(),
                lastUsedObject: a.Z.getLastUsedObject()
            }),
            []
        ),
        i = (0, n.Wu)([a.Z], () => a.Z.getDeveloperShelfItems(), []);
    return l.useMemo(
        () =>
            e
                ? i
                      .map((e) => ({
                          application: e,
                          activity: {
                              ...r.wT,
                              ...e.embeddedActivityConfig,
                              application_id: e.id
                          }
                      }))
                      .sort((e, i) => {
                          let l = t[e.application.id],
                              n = t[i.application.id];
                          return null == l ? 1 : null == n ? -1 : n - l;
                      })
                : [],
        [i, e, t]
    );
};
