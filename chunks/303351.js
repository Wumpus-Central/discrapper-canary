n.d(t, { Z: () => o }), n(896048);
var r = n(987281),
    i = n(531525);
let a = [
        i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
    ],
    s = [i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, i.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
    o = () => {
        let e = r.a.useField("hasSearchResults"),
            t = r.a.useField("searchResults");
        return e
            ? {
                  hideGuildOptions: ![...t].some((e) => a.includes(e)),
                  hideGlobalOption: ![...t].some((e) => s.includes(e)),
              }
            : {
                  hideGuildOptions: !1,
                  hideGlobalOption: !1,
              };
    };
