n.d(t, { Z: () => l });
var i = n(987281),
    s = n(531525);
let r = [
        s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
    ],
    a = [s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, s.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
    l = () => {
        let e = i.a.useField("hasSearchResults"),
            t = i.a.useField("searchResults");
        return e
            ? {
                  hideGuildOptions: ![...t].some((e) => r.includes(e)),
                  hideGlobalOption: ![...t].some((e) => a.includes(e)),
              }
            : { hideGuildOptions: !1, hideGlobalOption: !1 };
    };
