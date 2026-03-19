n.d(t, { Z: () => r });
var i = n(987281),
    s = n(531525);
let l = [
        s.Ho.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        s.Ho.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        s.Ho.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
        s.Ho.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
    ],
    a = [s.Ho.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, s.Ho.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
    r = () => {
        let e = i.a.useField("hasSearchResults"),
            t = i.a.useField("searchResults");
        return e
            ? {
                  hideGuildOptions: ![...t].some((e) => l.includes(e)),
                  hideGlobalOption: ![...t].some((e) => a.includes(e)),
              }
            : { hideGuildOptions: !1, hideGlobalOption: !1 };
    };
