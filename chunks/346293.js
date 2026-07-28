"use strict";
function i(e) {
    let {
        guildId: t,
        channelId: n,
        userIndividualFileSizeLimit: i,
        numAttachments: r,
        preCompressionFileSizes: a,
        preCompressionAggregateSize: s,
        postCompressionFileSizes: l,
        postCompressionAggregateSize: o,
        attachmentMimeTypes: d,
        errorType: c,
        kestrelVariant: u,
    } = e;
    return {
        ...(void 0 !== n ? { channel_id: n } : {}),
        ...(void 0 !== t ? { guild_id: t } : {}),
        user_individual_file_size_limit: i,
        num_attachments: r,
        pre_compression_file_sizes: a,
        pre_compression_aggregate_file_size: s,
        post_compression_file_sizes: l,
        post_compression_aggregate_file_size: o,
        attachment_mimetypes: d,
        error_type: c,
        kestrel_variant: u,
    };
}
n.d(t, { s: () => i });
