function n(e) {
    let n = 'primitive rsc_template',
        r = 'group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml',
        i = 'property rsc_defaults op_defaults';
    return {
        name: 'crmsh',
        aliases: ['crm', 'pcmk'],
        case_insensitive: !0,
        keywords: {
            keyword: 'params meta operations op rule attributes utilization read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\ number string',
            literal: 'Master Started Slave Stopped start promote demote stop monitor true false'
        },
        contains: [
            e.HASH_COMMENT_MODE,
            {
                beginKeywords: 'node',
                starts: {
                    end: '\\s*([\\w_-]+:)?',
                    starts: {
                        className: 'title',
                        end: '\\s*[\\$\\w_][\\w_-]*'
                    }
                }
            },
            {
                beginKeywords: n,
                starts: {
                    className: 'title',
                    end: '\\s*[\\$\\w_][\\w_-]*',
                    starts: { end: '\\s*@?[\\w_][\\w_\\.:-]*' }
                }
            },
            {
                begin: '\\b(' + r.split(' ').join('|') + ')\\s+',
                keywords: r,
                starts: {
                    className: 'title',
                    end: '[\\$\\w_][\\w_-]*'
                }
            },
            {
                beginKeywords: i,
                starts: {
                    className: 'title',
                    end: '\\s*([\\w_-]+:)?'
                }
            },
            e.QUOTE_STRING_MODE,
            {
                className: 'meta',
                begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
                relevance: 0
            },
            {
                className: 'number',
                begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
                relevance: 0
            },
            {
                className: 'literal',
                begin: '[-]?(infinity|inf)',
                relevance: 0
            },
            {
                className: 'attr',
                begin: /([A-Za-z$_#][\w_-]+)=/,
                relevance: 0
            },
            {
                className: 'tag',
                begin: '</?',
                end: '/?>',
                relevance: 0
            }
        ]
    };
}
e.exports = n;
