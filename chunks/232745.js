function n(e) {
    let n = e.regex,
        r = ['absolute_url', 'asset|0', 'asset_version', 'attribute', 'block', 'constant', 'controller|0', 'country_timezones', 'csrf_token', 'cycle', 'date', 'dump', 'expression', 'form|0', 'form_end', 'form_errors', 'form_help', 'form_label', 'form_rest', 'form_row', 'form_start', 'form_widget', 'html_classes', 'include', 'is_granted', 'logout_path', 'logout_url', 'max', 'min', 'parent', 'path|0', 'random', 'range', 'relative_path', 'render', 'render_esi', 'source', 'template_from_string', 'url|0'],
        i = ['abs', 'abbr_class', 'abbr_method', 'batch', 'capitalize', 'column', 'convert_encoding', 'country_name', 'currency_name', 'currency_symbol', 'data_uri', 'date', 'date_modify', 'default', 'escape', 'file_excerpt', 'file_link', 'file_relative', 'filter', 'first', 'format', 'format_args', 'format_args_as_text', 'format_currency', 'format_date', 'format_datetime', 'format_file', 'format_file_from_text', 'format_number', 'format_time', 'html_to_markdown', 'humanize', 'inky_to_html', 'inline_css', 'join', 'json_encode', 'keys', 'language_name', 'last', 'length', 'locale_name', 'lower', 'map', 'markdown', 'markdown_to_html', 'merge', 'nl2br', 'number_format', 'raw', 'reduce', 'replace', 'reverse', 'round', 'slice', 'slug', 'sort', 'spaceless', 'split', 'striptags', 'timezone_name', 'title', 'trans', 'transchoice', 'trim', 'u|0', 'upper', 'url_encode', 'yaml_dump', 'yaml_encode'],
        a = ['apply', 'autoescape', 'block', 'cache', 'deprecated', 'do', 'embed', 'extends', 'filter', 'flush', 'for', 'form_theme', 'from', 'if', 'import', 'include', 'macro', 'sandbox', 'set', 'stopwatch', 'trans', 'trans_default_domain', 'transchoice', 'use', 'verbatim', 'with'];
    a = a.concat(a.map((e) => `end${e}`));
    let s = {
            scope: 'string',
            variants: [
                {
                    begin: /'/,
                    end: /'/
                },
                {
                    begin: /"/,
                    end: /"/
                }
            ]
        },
        o = {
            scope: 'number',
            match: /\d+/
        },
        l = {
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            contains: [s, o]
        },
        u = {
            beginKeywords: r.join(' '),
            keywords: { name: r },
            relevance: 0,
            contains: [l]
        },
        c = {
            match: /\|(?=[A-Za-z_]+:?)/,
            beginScope: 'punctuation',
            relevance: 0,
            contains: [
                {
                    match: /[A-Za-z_]+:?/,
                    keywords: i
                }
            ]
        },
        d = (e, { relevance: r }) => ({
            beginScope: {
                1: 'template-tag',
                3: 'name'
            },
            relevance: r || 2,
            endScope: 'template-tag',
            begin: [/\{%/, /\s*/, n.either(...e)],
            end: /%\}/,
            keywords: 'in',
            contains: [c, u, s, o]
        }),
        f = /[a-z_]+/,
        _ = d(a, { relevance: 2 }),
        h = d([f], { relevance: 1 });
    return {
        name: 'Twig',
        aliases: ['craftcms'],
        case_insensitive: !0,
        subLanguage: 'xml',
        contains: [
            e.COMMENT(/\{#/, /#\}/),
            _,
            h,
            {
                className: 'template-variable',
                begin: /\{\{/,
                end: /\}\}/,
                contains: ['self', c, u, s, o]
            }
        ]
    };
}
e.exports = n;
