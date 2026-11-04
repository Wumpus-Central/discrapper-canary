let l = Object.freeze({
    SUMMARIES: (e) => `/guilds/${e}/discoverable-content/summaries`,
    REMOVE_SUMMARY: (e, n) => `/guilds/${e}/discoverable-content/summaries/${n}/remove`,
    DISCOVERABLE_CONTENT: (e) => `/guilds/${e}/discoverable-content`,
});
t.d(n, {}, { j: l });
