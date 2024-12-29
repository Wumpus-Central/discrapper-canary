function i() {
    return {
        logsUploaded: new Date().toISOString(),
        releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
        buildNumber: '355999',
        versionHash: '52828fc02d80c4d2be688da6148bc05b3b81fc51'
    };
}
r.d(n, {
    Z: function () {
        return i;
    }
});
