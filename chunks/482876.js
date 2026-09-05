n.d(t, { J: () => l, j: () => o });
var i = n(636537),
    r = n(280450),
    a = n(652215);
function s(e) {
    return {
        methods: e.methods.map((e) => {
            var t;
            return {
                method: e.method,
                vendor: e.vendor,
                title: e.title,
                description: e.description,
                providedBy: e.provided_by ?? null,
                icon:
                    null == (t = e.icon ?? null)
                        ? null
                        : {
                              paths: t.paths.map((e) => ({
                                  d: e.d,
                                  fillRule: "evenodd" === e.fill_rule ? "evenodd" : void 0,
                              })),
                          },
                externalWindow: e.external_window ?? null,
            };
        }),
        footerMessage: e.footer_message ?? null,
        outageBannerMessage: e.outage_banner_message ?? null,
    };
}
async function l() {
    return s((await i.Bo.get({ url: a.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body);
}
async function o() {
    let e = r.default.getSuspendedUserToken();
    return s(
        (await i.Bo.post({ url: a.Rsh.AGE_VERIFICATION_SUSPENDED_METHODS_V2, body: { token: e }, rejectWithError: !0 }))
            .body,
    );
}
